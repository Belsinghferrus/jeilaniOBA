import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import AppRoutes from './routes/AppRoutes';
import IntroLoader from './components/IntroLoader';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Initialize AOS once globally
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
      delay: 0,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  // Refresh AOS on every route change — AFTER Framer Motion's exit animation completes
  useEffect(() => {
    if (!isReady) return;

    // Wait for exit animation (500ms) + enter to settle (100ms)
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 650);

    return () => clearTimeout(timer);
  }, [location.pathname, isReady]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIsReady(true);
    // After intro, refresh AOS once
    setTimeout(() => AOS.refreshHard(), 200);
  };

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}
      {isReady && <AppRoutes />}
      {isReady && <ScrollToTop />}
    </>
  );
}

export default App;