import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import hero from '../assets/video/Balangoda.mp4';
const HeroVideo = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-maroon-dark">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={hero} type="video/mp4" />
      </video>
      
      {/* Dark Gradient Overlay (HBKU style) - Darker on left/bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-transparent to-transparent"></div>

      {/* Vertical Social Icons (Hidden on small screens) */}
      <div className="hidden md:flex flex-col absolute left-6 top-1/2 -translate-y-1/2 space-y-6 z-20">
        <a href="#" className="text-white hover:text-gold transition-transform hover:scale-110 text-xl">X</a>
        <a href="#" className="text-white hover:text-gold transition-transform hover:scale-110 text-xl">f</a>
        <a href="#" className="text-white hover:text-gold transition-transform hover:scale-110 text-xl">in</a>
      </div>

      {/* Main Hero Content (Left Aligned) */}
      <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-6 md:px-20">
        <div className="max-w-3xl">
          {/* Small White Dash */}
          <div className="w-16 h-1 bg-gold mb-6"></div>
          
          <h2 className="text-gold tracking-[0.2em] text-sm md:text-base uppercase mb-3 font-semibold">
            {t.hero.subtitle}
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          
          <Link 
            to={`/${lang}/membership`} 
            className="inline-block bg-white text-maroon font-bold px-8 py-4 text-sm md:text-base hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            {t.hero.btn}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator (Centered at bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-white/70">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 mb-2">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
        </div>
        <span className="text-[10px] tracking-widest uppercase">{t.hero.scroll}</span>
      </div>
    </div>
  );
};

export default HeroVideo;