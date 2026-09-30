import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    console.log('[ScrollToTop] button clicked');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted || !isVisible) return null;

  return createPortal(
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 999999,
        cursor: 'pointer',
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px',
        borderRadius: '9999px',
        backgroundColor: '#D4AF37',
        color: '#660033',
        border: 'none',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
      }}
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
        style={{ pointerEvents: 'none' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
      </svg>
    </button>,
    document.body
  );
};

export default ScrollToTop;