import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const CodeOfConduct = () => {
  const { t } = useLanguage();
  const conduct = t.membershipPage.conduct;

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {conduct.overline}
            </span>
          </div>
          <SectionTitle 
            title={conduct.title} 
            subtitle={conduct.subtitle}
          />
        </div>

        {/* Conduct Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {conduct.items.map((item, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-5 border-t border-gray-300 pt-8 relative"
            >
              
              {/* Animated Top Accent */}
              <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

              {/* Checkmark Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 flex items-center justify-center border border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <svg 
                    className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-1">
                {item}
              </p>

            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 pt-12 border-t border-gray-300 text-center">
          <p className="text-sm md:text-base text-gray-500 italic max-w-2xl mx-auto">
            By upholding these standards, every member contributes to a fellowship built on trust, respect, and shared purpose.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CodeOfConduct;