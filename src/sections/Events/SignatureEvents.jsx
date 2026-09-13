import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const SignatureEvents = () => {
  const { t } = useLanguage();
  const signature = t.eventsPage.signature;

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {signature.overline}
            </span>
          </div>
          <SectionTitle title={signature.title} />
        </div>

        {/* Editorial Intro - Pull-Quote Style */}
        <div className="relative mb-20 pl-6 md:pl-12 border-l-4 border-[#D4AF37]">
          <span className="absolute -top-10 -left-4 text-8xl text-[#660033]/10 font-serif leading-none select-none">
            &ldquo;
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-[#660033] leading-snug relative z-10">
            {signature.intro}
          </p>
        </div>

        {/* Signature Events Grid (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {signature.items.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col border-t border-gray-300 pt-8 relative"
            >
              
              {/* Animated Top Accent */}
              <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

              {/* Large Ghost Number */}
              <span className="text-5xl md:text-6xl font-bold text-gray-100 group-hover:text-[#D4AF37] transition-colors duration-300 leading-none mb-6 select-none">
                {item.number}
              </span>

              {/* Short Label / Badge */}
              <span className="inline-block self-start text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] border border-[#D4AF37]/40 px-3 py-1 mb-4">
                {item.short}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#660033] mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureEvents;