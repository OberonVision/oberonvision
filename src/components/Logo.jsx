export const Logo = ({ size = 'medium', className = '' }) => {
  const pixelSize = { small: 32, medium: 42, large: 56 }[size] || 42;

  return (
    <div
      className={`oberonvison-logo-wrapper ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
    >
      <div
        style={{
          width: pixelSize,
          height: pixelSize,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <img
          src="/assets/logo.webp"
          alt="Oberon Vision Emblem"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 10px rgba(0, 217, 245, 0.25))',
          }}
        />
      </div>
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: `${pixelSize * 0.52}px`,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          transition: 'color 0.6s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <span>Oberon</span>
        <span style={{ color: 'var(--accent-primary)', transition: 'color 0.6s ease' }}>Vision</span>
      </span>
    </div>
  );
};

export default Logo;

