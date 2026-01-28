import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '2rem 0',
          marginTop: 'auto'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              margin: 0
            }}
          >
            Cultured - Your personal exploration guide
          </p>
        </div>
      </footer>
    </div>
  );
}
