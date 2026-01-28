interface RatingStarsProps {
  rating: number;
  onRate?: (rating: number) => void;
  size?: 'small' | 'medium' | 'large';
  showEmpty?: boolean;
}

export function RatingStars({
  rating,
  onRate,
  size = 'medium',
  showEmpty = true
}: RatingStarsProps) {
  const sizeMap = {
    small: '1rem',
    medium: '1.25rem',
    large: '1.5rem'
  };

  const fontSize = sizeMap[size];
  const interactive = !!onRate;

  const handleClick = (starIndex: number) => {
    if (onRate) {
      // If clicking the same rating, clear it
      if (rating === starIndex) {
        onRate(0);
      } else {
        onRate(starIndex);
      }
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        gap: '0.125rem',
        cursor: interactive ? 'pointer' : 'default'
      }}
      role={interactive ? 'radiogroup' : 'img'}
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= rating;
        const show = showEmpty || filled;

        if (!show) return null;

        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            disabled={!interactive}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.125rem',
              cursor: interactive ? 'pointer' : 'default',
              fontSize,
              color: filled ? 'var(--accent-gold)' : 'var(--border)',
              transition: 'color 0.15s ease, transform 0.15s ease',
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              if (interactive) {
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (interactive) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          >
            {filled ? '\u2605' : '\u2606'}
          </button>
        );
      })}
    </div>
  );
}
