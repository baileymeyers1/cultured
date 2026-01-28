interface WinePlaceholderProps {
  subcategory: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

// Color schemes for different wine types
const colorSchemes: Record<string, { bg: string; accent: string; bottle: string }> = {
  Red: {
    bg: 'linear-gradient(135deg, #2C1810 0%, #4A2C2A 50%, #722F37 100%)',
    accent: '#8B3A3A',
    bottle: '#1a0f0a'
  },
  White: {
    bg: 'linear-gradient(135deg, #F5E6D3 0%, #E8DCC8 50%, #D4C4A8 100%)',
    accent: '#C9A962',
    bottle: '#8B7355'
  },
  Rose: {
    bg: 'linear-gradient(135deg, #F5E1E1 0%, #E8C4C4 50%, #D4A5A5 100%)',
    accent: '#C48888',
    bottle: '#8B6B6B'
  },
  Sparkling: {
    bg: 'linear-gradient(135deg, #F0EBE0 0%, #E5DFD0 50%, #D4CFC0 100%)',
    accent: '#D4AF37',
    bottle: '#6B6355'
  },
  Dessert: {
    bg: 'linear-gradient(135deg, #3D2914 0%, #5C3D1E 50%, #8B5A2B 100%)',
    accent: '#D4A574',
    bottle: '#2a1a0a'
  }
};

export function WinePlaceholder({ subcategory, size = 'medium' }: WinePlaceholderProps) {
  const scheme = colorSchemes[subcategory] || colorSchemes.Red;

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

      {/* Wine bottle SVG */}
      <svg
        width={size === 'small' ? 24 : size === 'medium' ? 36 : 48}
        height={size === 'small' ? 48 : size === 'medium' ? 72 : 96}
        viewBox="0 0 24 48"
        fill="none"
        style={{ opacity: 0.6 }}
      >
        {/* Bottle neck */}
        <rect
          x="9"
          y="0"
          width="6"
          height="8"
          rx="1"
          fill={scheme.bottle}
        />
        {/* Bottle neck ring */}
        <rect
          x="8"
          y="7"
          width="8"
          height="2"
          rx="1"
          fill={scheme.bottle}
        />
        {/* Bottle shoulder */}
        <path
          d="M8 9 L8 14 Q8 16 6 18 L6 44 Q6 46 8 46 L16 46 Q18 46 18 44 L18 18 Q16 16 16 14 L16 9 Z"
          fill={scheme.bottle}
        />
        {/* Wine level */}
        <path
          d="M7 22 L7 43 Q7 45 9 45 L15 45 Q17 45 17 43 L17 22 Q15 22 12 23 Q9 22 7 22 Z"
          fill={scheme.accent}
          opacity="0.7"
        />
        {/* Label */}
        <rect
          x="7"
          y="28"
          width="10"
          height="10"
          rx="1"
          fill="white"
          opacity="0.9"
        />
        <rect
          x="8"
          y="30"
          width="8"
          height="1"
          fill={scheme.accent}
          opacity="0.6"
        />
        <rect
          x="8"
          y="32"
          width="6"
          height="1"
          fill={scheme.accent}
          opacity="0.4"
        />
        <rect
          x="8"
          y="34"
          width="7"
          height="1"
          fill={scheme.accent}
          opacity="0.4"
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
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
