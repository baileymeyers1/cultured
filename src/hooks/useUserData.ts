import { useCallback, useEffect, useRef, useState } from 'react';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import type { UserData, UserEntryData } from '../types';

const STORAGE_KEY = 'cultured-user-data';

function readLocal(): UserData {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeLocal(data: UserData) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to write localStorage:', e);
  }
}

function mergeData(local: UserData, remote: UserData): UserData {
  const merged = { ...remote };
  for (const [id, localEntry] of Object.entries(local)) {
    const remoteEntry = remote[id];
    if (!remoteEntry) {
      merged[id] = localEntry;
    } else {
      const localTime = new Date(localEntry.updatedAt).getTime();
      const remoteTime = new Date(remoteEntry.updatedAt).getTime();
      merged[id] = localTime > remoteTime ? localEntry : remoteEntry;
    }
  }
  return merged;
}

export function useUserData() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData>(readLocal);
  const prevUidRef = useRef<string | null>(null);
  const firestoreWritePending = useRef(false);

  // Firestore document reference for current user
  const userDocRef = user ? doc(db, 'users', user.uid) : null;

  // Persist helper: writes to localStorage immediately + Firestore async
  const persistUpdate = useCallback((updater: (prev: UserData) => UserData) => {
    setUserData(prev => {
      const next = updater(prev);
      writeLocal(next);
      return next;
    });
    firestoreWritePending.current = true;
  }, []);

  // Write to Firestore when data changes and user is logged in
  useEffect(() => {
    if (!userDocRef || !firestoreWritePending.current) return;
    firestoreWritePending.current = false;
    setDoc(userDocRef, { entries: userData, updatedAt: new Date().toISOString() }, { merge: true })
      .catch(e => console.warn('Firestore write failed:', e));
  }, [userData, userDocRef]);

  // Handle login: merge local data with Firestore, set up real-time listener
  useEffect(() => {
    const uid = user?.uid ?? null;
    if (uid === prevUidRef.current) return;
    prevUidRef.current = uid;

    if (!uid) {
      // User signed out — keep current localStorage data, stop listening
      setUserData(readLocal());
      return;
    }

    // User signed in — merge local into Firestore
    const docRef = doc(db, 'users', uid);
    let unsubscribe: (() => void) | undefined;

    (async () => {
      try {
        const snap = await getDoc(docRef);
        const remoteData: UserData = snap.exists() ? (snap.data().entries ?? {}) : {};
        const localData = readLocal();
        const merged = mergeData(localData, remoteData);

        // Write merged data back
        await setDoc(docRef, { entries: merged, updatedAt: new Date().toISOString() }, { merge: true });
        writeLocal(merged);
        setUserData(merged);
      } catch (e) {
        console.warn('Merge on login failed:', e);
      }

      // Set up real-time listener
      unsubscribe = onSnapshot(docRef, (snap) => {
        if (snap.exists()) {
          const remoteData: UserData = snap.data().entries ?? {};
          writeLocal(remoteData);
          setUserData(remoteData);
        }
      });
    })();

    return () => {
      unsubscribe?.();
    };
  }, [user]);

  // Get data for a specific entry
  const getEntryData = useCallback((entryId: string): UserEntryData | undefined => {
    return userData[entryId];
  }, [userData]);

  // Update rating for an entry
  const setRating = useCallback((entryId: string, rating: number | undefined) => {
    persistUpdate(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        rating,
        updatedAt: new Date().toISOString()
      }
    }));
  }, [persistUpdate]);

  // Update notes for an entry
  const setNotes = useCallback((entryId: string, notes: string) => {
    persistUpdate(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        notes,
        updatedAt: new Date().toISOString()
      }
    }));
  }, [persistUpdate]);

  // Update status (wishlist/tried) for an entry
  const setStatus = useCallback((entryId: string, status: 'wishlist' | 'tried' | null) => {
    persistUpdate(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        status,
        updatedAt: new Date().toISOString()
      }
    }));
  }, [persistUpdate]);

  // Toggle wishlist status
  const toggleWishlist = useCallback((entryId: string) => {
    persistUpdate(prev => {
      const current = prev[entryId]?.status;
      return {
        ...prev,
        [entryId]: {
          ...prev[entryId],
          status: current === 'wishlist' ? null : 'wishlist',
          updatedAt: new Date().toISOString()
        }
      };
    });
  }, [persistUpdate]);

  // Toggle tried status
  const toggleTried = useCallback((entryId: string) => {
    persistUpdate(prev => {
      const current = prev[entryId]?.status;
      return {
        ...prev,
        [entryId]: {
          ...prev[entryId],
          status: current === 'tried' ? null : 'tried',
          updatedAt: new Date().toISOString()
        }
      };
    });
  }, [persistUpdate]);

  // Export all user data as JSON
  const exportData = useCallback(() => {
    const dataStr = JSON.stringify(userData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cultured-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }, [userData]);

  // Import user data from JSON
  const importData = useCallback((jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString) as UserData;
      persistUpdate(prev => ({
        ...prev,
        ...imported
      }));
      return true;
    } catch (error) {
      console.error('Failed to import data:', error);
      return false;
    }
  }, [persistUpdate]);

  // Get all entries with a specific status
  const getEntriesByStatus = useCallback((status: 'wishlist' | 'tried') => {
    return Object.entries(userData)
      .filter(([, data]) => data.status === status)
      .map(([id]) => id);
  }, [userData]);

  return {
    userData,
    getEntryData,
    setRating,
    setNotes,
    setStatus,
    toggleWishlist,
    toggleTried,
    exportData,
    importData,
    getEntriesByStatus
  };
}
