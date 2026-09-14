import { useLanguage } from '../../hooks/useLanguage';
import { Link, useParams } from 'react-router-dom';
import bg from "../../assets/images/x7.jpg";
const ContactHero = () => {
  const { t } = useLanguage();
  const { lang } = useParams();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#660033]">
      
      {/* Background Image */}
      <img 
        src={bg}
        alt="Contact Us" 
        className="absolute top-0 left-0 w-full h-full object-cover"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#660033]/95 via-[#660033]/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#660033]/80 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-6 md:px-20 pb-24">
        <div className="max-w-3xl">
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-white/80 mb-6 tracking-wider uppercase font-medium">
            <Link to={`/${lang}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#D4AF37] font-semibold">{t.contactPage.hero.breadcrumb}</span>
          </nav>

          {/* Title */}
          <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            {t.contactPage.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-md">
            {t.contactPage.hero.subtitle}
          </p>

        </div>
      </div>

    </div>
  );
};

export default ContactHero;