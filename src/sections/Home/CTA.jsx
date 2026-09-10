import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';

const CTA = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-32 bg-maroon relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        {/* Overline */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          <span className="w-12 h-0.5 bg-gold"></span>
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            {t.cta.overline}
          </span>
          <span className="w-12 h-0.5 bg-gold"></span>
        </div>
        
        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
          {t.cta.title}
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-14">
          {t.cta.desc}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to={`/${lang}/membership`} 
            className="w-full sm:w-auto inline-flex justify-center items-center bg-gold text-maroon font-bold px-10 py-4 rounded-sm text-lg hover:bg-white transition-colors duration-300 shadow-xl"
          >
            {t.cta.btn}
          </Link>
          
          <Link 
            to={`/${lang}/contact`} 
            className="w-full sm:w-auto inline-flex justify-center items-center border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-sm text-lg hover:bg-white hover:text-maroon transition-colors duration-300"
          >
            {t.cta.btnSecondary}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;