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
    {/* Vertical Social Icons (Hidden on small screens) */}
<div className="hidden md:flex flex-col absolute left-6 top-1/2 -translate-y-1/2 space-y-6 z-20">
  
  {/* Facebook */}
  <a 
    href="https://www.facebook.com/profile.php?id=61594431203153" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
    aria-label="Facebook"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/jeilanioba/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
    aria-label="Instagram"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  </a>

  {/* X (Twitter) */}
  <a 
    href="https://x.com/jeilanioba" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
    aria-label="X"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a 
    href="https://www.tiktok.com/@jeilanioba?lang=en" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
    aria-label="TikTok"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a 
    href="https://www.youtube.com/@JeilaniOBA" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
    aria-label="YouTube"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>

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