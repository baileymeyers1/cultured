import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuSheet } from '../common/MenuSheet';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
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
    </>
  );
}
