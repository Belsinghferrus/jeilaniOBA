import { useLanguage } from '../../hooks/useLanguage';
import { Link, useParams } from 'react-router-dom';

const PrivacyHero = () => {
  const { t } = useLanguage();
  const { lang } = useParams();
  const hero = t.privacyPage.hero;

  return (
    <section className="relative w-full pt-40 pb-16 bg-[#660033] overflow-hidden">
      
      {/* Subtle geometric decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border-[50px] border-white rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] border-[40px] border-[#D4AF37] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-white/80 mb-8 tracking-wider uppercase font-medium">
          <Link to={`/${lang}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#D4AF37] font-semibold">{hero.breadcrumb}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Title */}
          <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            {hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            {hero.subtitle}
          </p>

          {/* Effective Date */}
          <div className="inline-flex items-center space-x-3 border border-white/20 px-5 py-2">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
              {hero.effectiveLabel}
            </span>
            <span className="text-sm text-white/90 font-medium">
              {hero.effectiveValue}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrivacyHero;