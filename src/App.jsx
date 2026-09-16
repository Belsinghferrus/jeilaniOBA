import { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import IntroLoader from './components/IntroLoader';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIsReady(true);
  };

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