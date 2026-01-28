interface BeerPlaceholderProps {
  subcategory: string;
  size?: 'small' | 'medium' | 'large';
}

// Color schemes for different beer types
const colorSchemes: Record<string, { bg: string; accent: string; liquid: string }> = {
  Stout: {
    bg: 'linear-gradient(135deg, #1A1410 0%, #2E2118 50%, #3D2B1F 100%)',
    accent: '#8B4513',
    liquid: '#1C1008'
  },
  IPA: {
    bg: 'linear-gradient(135deg, #2B3D1E 0%, #3E5C2E 50%, #4A7A3E 100%)',
    accent: '#9ACD32',
    liquid: '#DAA520'
  },
  Pilsner: {
    bg: 'linear-gradient(135deg, #3D3D1E 0%, #5C5C2E 50%, #7A7A3E 100%)',
    accent: '#FFD700',
    liquid: '#F4D03F'
  },
  Lager: {
    bg: 'linear-gradient(135deg, #2E3D4A 0%, #3E5C6A 50%, #4A7A8A 100%)',
    accent: '#87CEEB',
    liquid: '#F5DEB3'
  },
  Wheat: {
    bg: 'linear-gradient(135deg, #4A3D2E 0%, #6A5C3E 50%, #8A7A4E 100%)',
    accent: '#F4A460',
    liquid: '#FFEFD5'
  },
  Belgian: {
    bg: 'linear-gradient(135deg, #3D1E2E 0%, #5C2E4A 50%, #7A3E5C 100%)',
    accent: '#DDA0DD',
    liquid: '#D4A574'
  },
  Porter: {
    bg: 'linear-gradient(135deg, #1E1410 0%, #2E2420 50%, #3D3028 100%)',
    accent: '#A0522D',
    liquid: '#3D2314'
  },
  Sour: {
    bg: 'linear-gradient(135deg, #4A2E3D 0%, #6A3E5C 50%, #8A4E7A 100%)',
    accent: '#FF69B4',
    liquid: '#FFB6C1'
  },
  'Pale Ale': {
    bg: 'linear-gradient(135deg, #3D4A2E 0%, #5C6A3E 50%, #7A8A4E 100%)',
    accent: '#9ACD32',
    liquid: '#E5AA70'
  },
  Amber: {
    bg: 'linear-gradient(135deg, #4A2E1E 0%, #6A3E2E 50%, #8A4E3E 100%)',
    accent: '#CD853F',
    liquid: '#B8860B'
  }
};

export function BeerPlaceholder({ subcategory, size = 'medium' }: BeerPlaceholderProps) {
  const scheme = colorSchemes[subcategory] || colorSchemes.Lager;

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

      {/* Beer pint glass SVG */}
      <svg
        width={size === 'small' ? 28 : size === 'medium' ? 42 : 56}
        height={size === 'small' ? 36 : size === 'medium' ? 54 : 72}
        viewBox="0 0 28 36"
        fill="none"
        style={{ opacity: 0.7 }}
      >
        {/* Glass body - pint shape */}
        <path
          d="M5 6 L4 32 Q4 34 6 34 L22 34 Q24 34 24 32 L23 6 Q23 4 21 4 L7 4 Q5 4 5 6 Z"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        {/* Liquid */}
        <path
          d="M5.5 14 L5 31 Q5 33 7 33 L21 33 Q23 33 23 31 L22.5 14 Q18 15 14 14 Q10 15 5.5 14 Z"
          fill={scheme.liquid}
          opacity="0.85"
        />
        {/* Foam layer */}
        <ellipse
          cx="14"
          cy="14"
          rx="8.5"
          ry="2.5"
          fill="rgba(255,255,255,0.9)"
        />
        <ellipse
          cx="14"
          cy="12"
          rx="7"
          ry="2"
          fill="rgba(255,255,255,0.8)"
        />
        <ellipse
          cx="14"
          cy="11"
          rx="5"
          ry="1.5"
          fill="rgba(255,255,255,0.7)"
        />
        {/* Bubbles */}
        <circle cx="10" cy="24" r="1" fill="rgba(255,255,255,0.3)" />
        <circle cx="16" cy="20" r="0.8" fill="rgba(255,255,255,0.3)" />
        <circle cx="12" cy="28" r="0.6" fill="rgba(255,255,255,0.3)" />
        <circle cx="18" cy="26" r="0.7" fill="rgba(255,255,255,0.3)" />
        {/* Glass rim */}
        <ellipse
          cx="14"
          cy="4"
          rx="8"
          ry="1.5"
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.5"
        />
        {/* Highlight */}
        <path
          d="M6 8 Q6.5 18 6 28"
          stroke="rgba(255,255,255,0.25)"
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
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
