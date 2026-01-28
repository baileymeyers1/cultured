import { Link } from 'react-router-dom';
import { RatingStars } from './RatingStars';
import { WinePlaceholder } from './WinePlaceholder';
import { useUserData } from '../../hooks/useUserData';
import type { WineEntry } from '../../types';

interface CardProps {
  entry: WineEntry;
}

export function Card({ entry }: CardProps) {
  const { getEntryData } = useUserData();
  const userData = getEntryData(entry.id);

  return (
    <Link
      to={`/${entry.category}/${entry.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        className="card"
        style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem'
        }}
      >
        {/* Image Placeholder */}
        <div
          style={{
            width: '80px',
            height: '100px',
            flexShrink: 0,
            borderRadius: '6px',
            overflow: 'hidden'
          }}
        >
          <WinePlaceholder subcategory={entry.subcategory} size="small" />
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Status Badge */}
          {userData?.status && (
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.625rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '0.125rem 0.375rem',
                borderRadius: '4px',
                marginBottom: '0.375rem',
                backgroundColor: userData.status === 'tried'
                  ? 'rgba(201, 169, 98, 0.15)'
                  : 'rgba(184, 115, 51, 0.15)',
                color: userData.status === 'tried'
                  ? 'var(--accent-gold)'
                  : 'var(--accent-copper)'
              }}
            >
              {userData.status === 'tried' ? 'Tried' : 'Wishlist'}
            </span>
          )}

          {/* Name */}
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 500,
              marginBottom: '0.25rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {entry.name}
          </h3>

          {/* Type & Origin */}
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {entry.subcategory} &middot; {entry.origin}
          </p>

          {/* Bottom Row: Rating & Price */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}
          >
            {userData?.rating ? (
              <RatingStars rating={userData.rating} size="small" showEmpty={false} />
            ) : (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Not rated
              </span>
            )}

            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--accent-gold)'
              }}
            >
              {entry.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
