import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { UserData, UserEntryData } from '../types';

const STORAGE_KEY = 'cultured-user-data';

export function useUserData() {
  const [userData, setUserData] = useLocalStorage<UserData>(STORAGE_KEY, {});

  // Get data for a specific entry
  const getEntryData = useCallback((entryId: string): UserEntryData | undefined => {
    return userData[entryId];
  }, [userData]);

  // Update rating for an entry
  const setRating = useCallback((entryId: string, rating: number | undefined) => {
    setUserData(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        rating,
        updatedAt: new Date().toISOString()
      }
    }));
  }, [setUserData]);

  // Update notes for an entry
  const setNotes = useCallback((entryId: string, notes: string) => {
    setUserData(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        notes,
        updatedAt: new Date().toISOString()
      }
    }));
  }, [setUserData]);

  // Update status (wishlist/tried) for an entry
  const setStatus = useCallback((entryId: string, status: 'wishlist' | 'tried' | null) => {
    setUserData(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        status,
        updatedAt: new Date().toISOString()
      }
    }));
  }, [setUserData]);

  // Toggle wishlist status
  const toggleWishlist = useCallback((entryId: string) => {
    setUserData(prev => {
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
  }, [setUserData]);

  // Toggle tried status
  const toggleTried = useCallback((entryId: string) => {
    setUserData(prev => {
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
  }, [setUserData]);

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
      setUserData(prev => ({
        ...prev,
        ...imported
      }));
      return true;
    } catch (error) {
      console.error('Failed to import data:', error);
      return false;
    }
  }, [setUserData]);

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
