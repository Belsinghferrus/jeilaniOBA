import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';

const MembershipCTA = () => {
  const { t, lang } = useLanguage();
  const cta = t.membershipPage.cta;

  return (
    <section className="py-32 bg-[#660033] relative overflow-hidden">
      
      {/* Subtle Background Geometric Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border-[50px] border-white rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] border-[35px] border-[#D4AF37] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        
        {/* Overline */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          <span className="w-10 h-0.5 bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            {cta.overline}
          </span>
          <span className="w-10 h-0.5 bg-[#D4AF37]"></span>
        </div>
        
        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
          {cta.title}
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-14">
          {cta.desc}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to={`/${lang}/contact`} 
            className="w-full sm:w-auto inline-flex justify-center items-center bg-[#D4AF37] text-[#660033] font-bold px-10 py-4 text-lg hover:bg-white transition-colors duration-300 shadow-xl"
          >
            {cta.btn}
          </Link>
          
          <Link 
            to={`/${lang}/contact`} 
            className="w-full sm:w-auto inline-flex justify-center items-center border-2 border-white/30 text-white font-semibold px-10 py-4 text-lg hover:bg-white hover:text-[#660033] transition-colors duration-300"
          >
            {cta.btnSecondary}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MembershipCTA;