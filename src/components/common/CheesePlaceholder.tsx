interface CheesePlaceholderProps {
  subcategory: string;
  size?: 'small' | 'medium' | 'large';
}

// Color schemes for different cheese types
const colorSchemes: Record<string, { bg: string; accent: string; cheese: string }> = {
  'Fresh': {
    bg: 'linear-gradient(135deg, #F5F5DC 0%, #FFFEF0 50%, #FFF8E7 100%)',
    accent: '#FFE4B5',
    cheese: '#FFFACD'
  },
  'Soft-ripened': {
    bg: 'linear-gradient(135deg, #F5DEB3 0%, #FFE4C4 50%, #FFDAB9 100%)',
    accent: '#DEB887',
    cheese: '#FFF8DC'
  },
  'Semi-soft': {
    bg: 'linear-gradient(135deg, #D2B48C 0%, #DEB887 50%, #E6BE8A 100%)',
    accent: '#F5DEB3',
    cheese: '#FFE4B5'
  },
  'Semi-hard': {
    bg: 'linear-gradient(135deg, #CD853F 0%, #D2691E 50%, #DAA520 100%)',
    accent: '#FFD700',
    cheese: '#F4A460'
  },
  'Hard': {
    bg: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
    accent: '#DAA520',
    cheese: '#D2691E'
  },
  'Blue': {
    bg: 'linear-gradient(135deg, #F0E68C 0%, #EEE8AA 50%, #F5F5DC 100%)',
    accent: '#4682B4',
    cheese: '#FAFAD2'
  },
  'Washed-rind': {
    bg: 'linear-gradient(135deg, #D2691E 0%, #E07020 50%, #FF8C00 100%)',
    accent: '#FFD700',
    cheese: '#FFA500'
  }
};

export function CheesePlaceholder({ subcategory, size = 'medium' }: CheesePlaceholderProps) {
  const scheme = colorSchemes[subcategory] || colorSchemes['Semi-hard'];
  const isLight = subcategory === 'Fresh' || subcategory === 'Blue';

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
          background: `radial-gradient(circle, ${scheme.accent}33 0%, transparent 70%)`,
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
          background: `radial-gradient(circle, ${scheme.accent}22 0%, transparent 70%)`,
        }}
      />

      {/* Cheese wedge SVG */}
      <svg
        width={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
        height={size === 'small' ? 28 : size === 'medium' ? 42 : 56}
        viewBox="0 0 32 28"
        fill="none"
        style={{ opacity: 0.9 }}
      >
        {/* Cheese wedge body */}
        <path
          d="M4 24 L16 4 L28 24 Z"
          fill={scheme.cheese}
          stroke={isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.3)'}
          strokeWidth="1"
        />
        {/* Rind on bottom */}
        <path
          d="M4 24 L28 24"
          stroke={isLight ? 'rgba(139,69,19,0.4)' : 'rgba(255,255,255,0.4)'}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Cheese holes for non-blue */}
        {subcategory !== 'Blue' && (
          <>
            <circle
              cx="12"
              cy="18"
              r="2"
              fill={isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.2)'}
            />
            <circle
              cx="20"
              cy="16"
              r="1.5"
              fill={isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.2)'}
            />
            <circle
              cx="16"
              cy="20"
              r="1"
              fill={isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.2)'}
            />
          </>
        )}
        {/* Blue veining for blue cheese */}
        {subcategory === 'Blue' && (
          <>
            <path
              d="M10 16 Q14 14 12 20"
              stroke="#4682B4"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M18 12 Q20 18 16 22"
              stroke="#4682B4"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M14 10 Q16 14 22 16"
              stroke="#4682B4"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </>
        )}
        {/* Highlight */}
        <path
          d="M8 20 L14 8"
          stroke={isLight ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)'}
          strokeWidth="2"
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
          background: isLight
            ? 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
