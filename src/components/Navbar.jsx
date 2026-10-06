import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import { Menu, X, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const { isDark, isLight, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: isScrolled ? '12px' : '0',
        left: '0',
        right: '0',
        zIndex: 1000,
        padding: isScrolled ? '0 16px' : '0',
        transition: 'top 0.3s ease, padding 0.3s ease',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
          background: isScrolled ? 'var(--bg-nav)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderRadius: isScrolled ? 'var(--theme-border-radius)' : '0',
          border: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--card-shadow)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo size="medium" />
        </a>

        <ul style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-only-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* SINGLE DUAL-ICON THEME SWITCH (LIGHT & DARK IN ONE UNIFIED SWITCH) */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-switch"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '76px',
              height: '38px',
              padding: '4px',
              borderRadius: '30px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Sliding Indicator Capsule */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: isDark ? '40px' : '4px',
                width: '30px',
                height: '28px',
                borderRadius: '20px',
                background: isDark
                  ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(168, 85, 247, 0.45))'
                  : 'linear-gradient(135deg, #ffffff, #fffbeb)',
                border: isDark ? '1px solid #00f0ff' : '1px solid rgba(245, 158, 11, 0.5)',
                boxShadow: isDark
                  ? '0 0 14px rgba(0, 240, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                  : '0 2px 8px rgba(0, 0, 0, 0.15)',
                transition: 'left 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, border-color 0.3s ease',
                zIndex: 1,
              }}
            />

            {/* Sun Icon (Light Mode) */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '28px',
                color: isLight ? '#f59e0b' : 'var(--text-muted)',
                filter: isLight ? 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.8))' : 'none',
                transition: 'color 0.3s ease, filter 0.3s ease',
              }}
            >
              <Sun size={17} strokeWidth={2.4} />
            </div>

            {/* Moon Icon (Dark Mode) */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '28px',
                color: isDark ? '#00f0ff' : 'var(--text-muted)',
                filter: isDark ? 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.9))' : 'none',
                transition: 'color 0.3s ease, filter 0.3s ease',
              }}
            >
              <Moon size={16} strokeWidth={2.4} />
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger-btn"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px',
            boxShadow: 'var(--card-shadow)',
            zIndex: 999,
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'block',
                    padding: '8px 0',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Theme Mode</span>
            <button
              onClick={toggleTheme}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '76px',
                height: '38px',
                padding: '4px',
                borderRadius: '30px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '4px',
                  left: isDark ? '40px' : '4px',
                  width: '30px',
                  height: '28px',
                  borderRadius: '20px',
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(168, 85, 247, 0.45))'
                    : 'linear-gradient(135deg, #ffffff, #fffbeb)',
                  border: isDark ? '1px solid #00f0ff' : '1px solid rgba(245, 158, 11, 0.5)',
                  transition: 'left 0.35s ease',
                  zIndex: 1,
                }}
              />
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', color: isLight ? '#f59e0b' : 'var(--text-muted)' }}>
                <Sun size={16} />
              </div>
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', color: isDark ? '#00f0ff' : 'var(--text-muted)' }}>
                <Moon size={16} />
              </div>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-only-nav {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
