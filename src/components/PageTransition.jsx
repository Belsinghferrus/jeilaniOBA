import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Outlet } from 'react-router-dom';
import AOS from 'aos';

const PageTransition = () => {
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  // Refresh AOS after page content mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Outlet />
    </motion.div>
  );
};

export default PageTransition;