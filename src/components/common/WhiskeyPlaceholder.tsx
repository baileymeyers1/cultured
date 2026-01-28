interface WhiskeyPlaceholderProps {
  subcategory: string;
  size?: 'small' | 'medium' | 'large';
}

// Color schemes for different whiskey types
const colorSchemes: Record<string, { bg: string; accent: string; liquid: string }> = {
  Scotch: {
    bg: 'linear-gradient(135deg, #2C1810 0%, #4A3728 50%, #6B4423 100%)',
    accent: '#D4A574',
    liquid: '#C68E17'
  },
  Bourbon: {
    bg: 'linear-gradient(135deg, #3D2314 0%, #5C3D1E 50%, #8B5A2B 100%)',
    accent: '#DAA520',
    liquid: '#E5AA70'
  },
  Rye: {
    bg: 'linear-gradient(135deg, #2B1D0E 0%, #4A3520 50%, #6B4F32 100%)',
    accent: '#CD853F',
    liquid: '#D2691E'
  },
  Japanese: {
    bg: 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 50%, #3D3D5C 100%)',
    accent: '#B8860B',
    liquid: '#DAA520'
  },
  Irish: {
    bg: 'linear-gradient(135deg, #1E3D1E 0%, #2E5C2E 50%, #3E7A3E 100%)',
    accent: '#90EE90',
    liquid: '#F5DEB3'
  },
  Canadian: {
    bg: 'linear-gradient(135deg, #4A1C1C 0%, #6B2D2D 50%, #8B3D3D 100%)',
    accent: '#DC143C',
    liquid: '#FFDEAD'
  }
};

export function WhiskeyPlaceholder({ subcategory, size = 'medium' }: WhiskeyPlaceholderProps) {
  const scheme = colorSchemes[subcategory] || colorSchemes.Scotch;

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

      {/* Whiskey glass SVG */}
      <svg
        width={size === 'small' ? 28 : size === 'medium' ? 42 : 56}
        height={size === 'small' ? 36 : size === 'medium' ? 54 : 72}
        viewBox="0 0 28 36"
        fill="none"
        style={{ opacity: 0.7 }}
      >
        {/* Glass body - tumbler shape */}
        <path
          d="M4 4 L6 32 Q6 34 8 34 L20 34 Q22 34 22 32 L24 4 Z"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        {/* Liquid */}
        <path
          d="M6 18 L7 31 Q7 33 9 33 L19 33 Q21 33 21 31 L22 18 Q18 19 14 18 Q10 19 6 18 Z"
          fill={scheme.liquid}
          opacity="0.8"
        />
        {/* Ice cube 1 */}
        <rect
          x="8"
          y="20"
          width="5"
          height="5"
          rx="1"
          fill="rgba(255,255,255,0.4)"
          transform="rotate(-10 10 22)"
        />
        {/* Ice cube 2 */}
        <rect
          x="15"
          y="22"
          width="4"
          height="4"
          rx="1"
          fill="rgba(255,255,255,0.3)"
          transform="rotate(15 17 24)"
        />
        {/* Glass rim */}
        <ellipse
          cx="14"
          cy="4"
          rx="10"
          ry="2"
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.5"
        />
        {/* Highlight */}
        <path
          d="M6 8 Q6 20 7 28"
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
