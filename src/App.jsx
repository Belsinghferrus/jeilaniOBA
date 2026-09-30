import { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import IntroLoader from './components/IntroLoader';
import AOS from 'aos';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIsReady(true);
  };


  useEffect(() => {
    AOS.init({
      duration: 800,          // Animation duration in ms
      easing: 'ease-out-cubic',
      once: true,             // Only animate once per page load
      offset: 80,             // Trigger point (px from bottom of viewport)
      delay: 0,               // Global delay
      mirror: false,          // Don't animate out when scrolling past
      anchorPlacement: 'top-bottom',
    });
  }, []);

  
  // Prevent scroll while the intro is playing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}
      
      {/* Render routes only after intro completes */}
      <div 
        style={{ 
          opacity: isReady ? 1 : 0, 
          transition: 'opacity 0.4s ease',
          pointerEvents: isReady ? 'auto' : 'none',
        }}
      >
        <AppRoutes />
      </div>
    </>
  );
}

export default App;