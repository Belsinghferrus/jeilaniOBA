import { useLanguage } from '../../hooks/useLanguage';

const NewsletterIntro = () => {
  const { t } = useLanguage();
  const intro = t.newsletterPage.intro;

  return (
    <section className="min-h-screen bg-offwhite flex items-center relative overflow-hidden">
      
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] border-[60px] border-[#660033] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] border-[40px] border-[#D4AF37] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center py-24">
        
        {/* Overline */}
        <div className="flex justify-center items-center space-x-3 mb-8">
          <span className="w-12 h-0.5 bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] font-bold tracking-[0.25em] uppercase text-xs md:text-sm">
            {intro.overline}
          </span>
          <span className="w-12 h-0.5 bg-[#D4AF37]"></span>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#660033] leading-tight mb-10 max-w-4xl mx-auto">
          {intro.title}
        </h2>

        {/* Gold Divider */}
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12"></div>

        {/* Main Paragraph */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light mb-16">
          {intro.p1}
        </p>

        {/* Closing Italic Quote */}
        <p className="text-lg md:text-xl italic text-[#660033]/70 font-light max-w-2xl mx-auto">
          — {intro.quote}
        </p>

      </div>

    </section>
  );
};

export default NewsletterIntro;