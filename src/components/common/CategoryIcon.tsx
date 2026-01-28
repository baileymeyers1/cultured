import type { ReactElement } from 'react';

interface CategoryIconProps {
  category: string;
  size?: number;
}

export function CategoryIcon({ category, size = 24 }: CategoryIconProps) {
  const iconColor = 'var(--text-secondary)';

  const icons: Record<string, ReactElement> = {
    wine: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <path d="M7 3h10v5a5 5 0 0 1-10 0V3z" />
        <path d="M7 7h10" />
      </svg>
    ),
    whiskey: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8" />
        <path d="M12 17v5" />
        <path d="M6 2h12l-2 15H8L6 2z" />
        <path d="M6 6h12" />
        <path d="M7 10h10" />
      </svg>
    ),
    coffee: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    tea: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11h12a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4v-4z" />
        <path d="M16 11h2a3 3 0 0 1 0 6h-2" />
        <path d="M6 6c.6-1.2 1.8-2 3-2 1.5 0 2.5 1 3 2 .5-1 1.5-2 3-2 1.2 0 2.4.8 3 2" />
      </svg>
    ),
    cheese: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12L12 2l10 10v10H2V12z" />
        <circle cx="7" cy="16" r="1.5" fill={iconColor} />
        <circle cx="14" cy="14" r="1" fill={iconColor} />
        <circle cx="11" cy="18" r="1" fill={iconColor} />
        <path d="M2 12h20" />
      </svg>
    ),
    beer: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a3 3 0 0 1 0 6h-1" />
        <path d="M5 8h12v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
        <path d="M5 12h12" />
        <path d="M9 4v4" />
        <path d="M13 4v4" />
      </svg>
    ),
    cigars: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16" />
        <path d="M4 12c0-1.5 1-3 3-3h10c2 0 3 1.5 3 3s-1 3-3 3H7c-2 0-3-1.5-3-3z" />
        <path d="M20 12c1 0 2 .5 2 1.5s-1 1.5-2 1.5" />
        <path d="M4 9v6" />
        <path d="M6 10v4" />
        <path d="M2 11c.5-.5 1-1 2-1" />
        <path d="M2 13c.5.5 1 1 2 1" />
      </svg>
    ),
    music: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="15.5" r="2.5" />
        <path d="M8 17V5l12-2v12" />
      </svg>
    ),
    art: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    fashion: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L8 6H4v4l4 4v8h8v-8l4-4V6h-4L12 2z" />
        <path d="M8 10h8" />
      </svg>
    ),
    literature: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    film: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
    theater: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="9" r="5" />
        <circle cx="16" cy="9" r="5" />
        <path d="M5 15c0 2.5 1.3 4 3 4 1 0 1.8-.5 2.5-1.5" />
        <path d="M19 15c0 2.5-1.3 4-3 4-1 0-1.8-.5-2.5-1.5" />
        <circle cx="6" cy="8" r="0.5" fill={iconColor} />
        <circle cx="10" cy="8" r="0.5" fill={iconColor} />
        <circle cx="14" cy="8" r="0.5" fill={iconColor} />
        <circle cx="18" cy="8" r="0.5" fill={iconColor} />
        <path d="M6 11a2 2 0 0 0 4 0" />
        <path d="M14 11c.5.5 1.5 1 2 0" />
      </svg>
    )
  };

  return icons[category] || icons.wine;
}
