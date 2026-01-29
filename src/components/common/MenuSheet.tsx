import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomSheet } from './BottomSheet';
import { SurpriseMe } from './SurpriseMe';
import { Statistics } from './Statistics';
import { LoginModal } from './LoginModal';
import { useUserData } from '../../hooks/useUserData';
import { useAuth } from '../../contexts/AuthContext';

interface MenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuSheet({ isOpen, onClose }: MenuSheetProps) {
  const { exportData, importData } = useUserData();
  const { user, signOut } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importData(content);
      if (success) {
        alert('Data imported successfully!');
      } else {
        alert('Failed to import data. Please check the file format.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <>
    <BottomSheet isOpen={isOpen} onClose={onClose} title="Menu">
      {/* Account Section */}
      <section style={{ marginBottom: '20px' }}>
        <SectionHeader>Account</SectionHeader>
        {user ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {(user.displayName || user.email || '?')[0].toUpperCase()}
                </div>
              )}
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  {user.displayName || 'User'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {user.email}
                </div>
              </div>
            </div>
            <button
              onClick={async () => { await signOut(); }}
              style={{
                padding: '6px 14px',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                color: '#dc2626',
                backgroundColor: 'transparent',
                border: '1px solid #fecaca',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => { onClose(); setIsLoginOpen(true); }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px 16px',
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Sign in to sync your data
          </button>
        )}
      </section>

      {/* Collections Link */}
      <section style={{ marginBottom: '20px' }}>
        <Link
          to="/collections"
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 16px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            transition: 'background-color 0.2s'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.25rem' }}>&#x1F4DA;</span>
            <div>
              <div style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                My Collections
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Wishlist, Tried, and Rated items
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: 'var(--text-secondary)' }}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </section>

      {/* Discover Section (Compact) */}
      <section style={{ marginBottom: '20px' }}>
        <SurpriseMe onNavigate={onClose} />
      </section>

      {/* Statistics Section */}
      <section style={{ marginBottom: '20px' }}>
        <SectionHeader>Your Progress</SectionHeader>
        <Statistics />
      </section>

      {/* Data Management Section */}
      <section>
        <SectionHeader>Data</SectionHeader>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={exportData}
            style={{
              flex: 1,
              padding: '12px 16px',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Export
          </button>
          <button
            onClick={handleImport}
            style={{
              flex: 1,
              padding: '12px 16px',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </section>
    </BottomSheet>

    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '12px'
      }}
    >
      {children}
    </h3>
  );
}
