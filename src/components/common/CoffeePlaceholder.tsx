interface CoffeePlaceholderProps {
  subcategory: string;
  size?: 'small' | 'medium' | 'large';
}

// Color schemes for different coffee types
const colorSchemes: Record<string, { bg: string; accent: string; liquid: string }> = {
  'Single Origin': {
    bg: 'linear-gradient(135deg, #2C1810 0%, #4A2C2A 50%, #6B3E3A 100%)',
    accent: '#D4A574',
    liquid: '#3D2314'
  },
  'Blend': {
    bg: 'linear-gradient(135deg, #1A1A1A 0%, #3D3D3D 50%, #5C5C5C 100%)',
    accent: '#C9A962',
    liquid: '#2C1810'
  },
  'Decaf': {
    bg: 'linear-gradient(135deg, #3D3228 0%, #5C4A3D 50%, #7A6455 100%)',
    accent: '#A8C5A8',
    liquid: '#4A3728'
  }
};

export function CoffeePlaceholder({ subcategory, size = 'medium' }: CoffeePlaceholderProps) {
  const scheme = colorSchemes[subcategory] || colorSchemes['Single Origin'];

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

      {/* Coffee cup SVG */}
      <svg
        width={size === 'small' ? 28 : size === 'medium' ? 42 : 56}
        height={size === 'small' ? 36 : size === 'medium' ? 54 : 72}
        viewBox="0 0 28 36"
        fill="none"
        style={{ opacity: 0.8 }}
      >
        {/* Cup body */}
        <path
          d="M4 10 L4 28 Q4 32 8 32 L18 32 Q22 32 22 28 L22 10 Z"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        {/* Coffee liquid */}
        <path
          d="M5 14 L5 27 Q5 31 9 31 L17 31 Q21 31 21 27 L21 14 Q17 15 13 14 Q9 15 5 14 Z"
          fill={scheme.liquid}
          opacity="0.9"
        />
        {/* Cup handle */}
        <path
          d="M22 14 Q28 14 28 20 Q28 26 22 26"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Cup rim */}
        <ellipse
          cx="13"
          cy="10"
          rx="9"
          ry="2"
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.5"
        />
        {/* Steam lines */}
        <path
          d="M8 6 Q9 4 8 2"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M13 5 Q14 3 13 1"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M18 6 Q19 4 18 2"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* Highlight */}
        <path
          d="M6 14 Q6 22 6 26"
          stroke="rgba(255,255,255,0.2)"
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
