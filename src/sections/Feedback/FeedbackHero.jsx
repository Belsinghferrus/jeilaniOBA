import { useLanguage } from '../../hooks/useLanguage';
import { Link, useParams } from 'react-router-dom';

const FeedbackHero = () => {
  const { t } = useLanguage();
  const { lang } = useParams();
  const hero = t.feedback.hero;

  return (
    <section className="relative w-full pt-40 pb-20 bg-[#660033] overflow-hidden">
      
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
          <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {hero.subtitle}
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeedbackHero;