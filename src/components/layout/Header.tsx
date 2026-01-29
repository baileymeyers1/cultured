import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuSheet } from '../common/MenuSheet';
import { LoginModal } from '../common/LoginModal';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <>
      <header
        style={{
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--bg-primary)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}
            >
              Cultured
            </span>
          </Link>

          <nav style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {/* User avatar or sign-in button */}
            {!loading && (
              user ? (
                <button
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Open menu"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '2px solid var(--border)',
                    padding: 0,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {(user.displayName || user.email || '?')[0].toUpperCase()}
                    </span>
                  )}
                </button>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                >
                  Sign In
                </button>
              )
            )}

            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                padding: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span
                style={{
                  display: 'block',
                  width: '20px',
                  height: '2px',
                  backgroundColor: 'var(--text-primary)',
                  borderRadius: '1px'
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '20px',
                  height: '2px',
                  backgroundColor: 'var(--text-primary)',
                  borderRadius: '1px'
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '20px',
                  height: '2px',
                  backgroundColor: 'var(--text-primary)',
                  borderRadius: '1px'
                }}
              />
            </button>
          </nav>
        </div>
      </header>

      <MenuSheet isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
