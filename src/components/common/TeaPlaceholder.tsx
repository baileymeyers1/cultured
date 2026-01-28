interface TeaPlaceholderProps {
  subcategory: string;
  size?: 'small' | 'medium' | 'large';
}

// Color schemes for different tea types
const colorSchemes: Record<string, { bg: string; accent: string; liquid: string }> = {
  'Green': {
    bg: 'linear-gradient(135deg, #1A3D1A 0%, #2D5A2D 50%, #3E7A3E 100%)',
    accent: '#90EE90',
    liquid: '#8FBC8F'
  },
  'Black': {
    bg: 'linear-gradient(135deg, #2C1810 0%, #4A2C1A 50%, #6B3E2A 100%)',
    accent: '#D4A574',
    liquid: '#8B4513'
  },
  'Oolong': {
    bg: 'linear-gradient(135deg, #3D3020 0%, #5C4A30 50%, #7A6440 100%)',
    accent: '#DAA520',
    liquid: '#CD853F'
  },
  'White': {
    bg: 'linear-gradient(135deg, #E8E4DC 0%, #D4CFC4 50%, #C0B8AC 100%)',
    accent: '#F5DEB3',
    liquid: '#FFEFD5'
  },
  'Pu-erh': {
    bg: 'linear-gradient(135deg, #1A1410 0%, #2D241A 50%, #3D3428 100%)',
    accent: '#8B4513',
    liquid: '#4A3728'
  },
  'Herbal': {
    bg: 'linear-gradient(135deg, #4A3048 0%, #6B4A68 50%, #8B6A88 100%)',
    accent: '#DDA0DD',
    liquid: '#E6E6FA'
  }
};

export function TeaPlaceholder({ subcategory, size = 'medium' }: TeaPlaceholderProps) {
  const scheme = colorSchemes[subcategory] || colorSchemes['Green'];
  const isWhiteTea = subcategory === 'White';

  const dimensions = {
    small: { width: 80, height: 100 },
    medium: { width: 120, height: 160 },
    large: { width: 200, height: 280 }
  };

  const { width, height } = dimensions[size];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minWidth: width,
        minHeight: height,
        background: scheme.bg,
        borderRadius: size === 'small' ? '6px' : '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-20%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${scheme.accent}22 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${scheme.accent}15 0%, transparent 70%)`,
        }}
      />

      {/* Teacup SVG */}
      <svg
        width={size === 'small' ? 28 : size === 'medium' ? 42 : 56}
        height={size === 'small' ? 36 : size === 'medium' ? 54 : 72}
        viewBox="0 0 28 36"
        fill="none"
        style={{ opacity: 0.8 }}
      >
        {/* Teacup body - rounded Asian style */}
        <path
          d="M4 12 Q4 28 14 28 Q24 28 24 12"
          fill={isWhiteTea ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)'}
          stroke={isWhiteTea ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'}
          strokeWidth="1"
        />
        {/* Tea liquid */}
        <path
          d="M5 14 Q5 26 14 26 Q23 26 23 14 Q18 15 14 14 Q10 15 5 14 Z"
          fill={scheme.liquid}
          opacity="0.8"
        />
        {/* Cup rim */}
        <ellipse
          cx="14"
          cy="12"
          rx="10"
          ry="3"
          fill={isWhiteTea ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.2)'}
          stroke={isWhiteTea ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.4)'}
          strokeWidth="0.5"
        />
        {/* Saucer */}
        <ellipse
          cx="14"
          cy="30"
          rx="12"
          ry="3"
          fill={isWhiteTea ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)'}
          stroke={isWhiteTea ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.25)'}
          strokeWidth="0.5"
        />
        {/* Steam lines */}
        <path
          d="M9 8 Q10 5 9 2"
          stroke={isWhiteTea ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.3)'}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M14 7 Q15 4 14 1"
          stroke={isWhiteTea ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)'}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M19 8 Q20 5 19 2"
          stroke={isWhiteTea ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.3)'}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* Highlight */}
        <path
          d="M6 14 Q6 20 8 24"
          stroke={isWhiteTea ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.2)'}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Subtle shine effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isWhiteTea
            ? 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
