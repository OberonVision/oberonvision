import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import { Menu, X, Sun, Moon, Phone, MessageSquare } from 'lucide-react';

export const Navbar = () => {
  const { isDark, isLight, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        top: isScrolled ? '8px' : '0',
        left: '0',
        right: '0',
        zIndex: 1000,
        padding: isScrolled ? '0 12px' : '0',
        transition: 'top 0.3s ease, padding 0.3s ease',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '64px' : '72px',
          background: isScrolled ? 'var(--bg-nav)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderRadius: isScrolled ? 'var(--theme-border-radius)' : '0',
          border: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--card-shadow)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo size="medium" />
        </a>

        {/* Desktop Navigation Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-only-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Theme Toggle Capsule */}
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
              width: '68px',
              height: '34px',
              padding: '3px',
              borderRadius: '24px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Sliding Pill Indicator */}
            <div
              style={{
                position: 'absolute',
                top: '3px',
                left: isDark ? '36px' : '3px',
                width: '28px',
                height: '26px',
                borderRadius: '16px',
                background: isDark
                  ? 'linear-gradient(135deg, rgba(216, 183, 122, 0.35), rgba(16, 185, 129, 0.4))'
                  : 'linear-gradient(135deg, #ffffff, #fffbeb)',
                border: isDark ? '1px solid var(--accent-primary)' : '1px solid rgba(245, 158, 11, 0.5)',
                boxShadow: isDark
                  ? '0 0 12px var(--glow-accent)'
                  : '0 2px 6px rgba(0, 0, 0, 0.15)',
                transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 1,
              }}
            />

            {/* Sun Icon */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '26px',
                color: isLight ? '#f59e0b' : 'var(--text-muted)',
              }}
            >
              <Sun size={15} strokeWidth={2.4} />
            </div>

            {/* Moon Icon */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '26px',
                color: isDark ? 'var(--accent-primary)' : 'var(--text-muted)',
              }}
            >
              <Moon size={14} strokeWidth={2.4} />
            </div>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger-btn"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '7px',
              borderRadius: '10px',
              color: 'var(--text-primary)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px 20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
            zIndex: 999,
            animation: 'slideDownNav 0.25s ease-out',
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    display: 'block',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Quick Direct Mobile Contact Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
            <a
              href="tel:8072935820"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                borderRadius: '14px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              <Phone size={15} style={{ color: 'var(--accent-primary)' }} /> Call Us
            </a>
            <a
              href="https://wa.me/918072935820?text=Hi%20OberonVision%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                borderRadius: '14px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#10b981',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              <MessageSquare size={15} /> WhatsApp
            </a>
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
        @keyframes slideDownNav {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
