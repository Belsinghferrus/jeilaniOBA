import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const HowToRegister = () => {
  const { t } = useLanguage();
  const { steps } = t.membershipPage.register;

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {t.membershipPage.register.overline}
            </span>
          </div>
          <SectionTitle 
            title={t.membershipPage.register.title} 
            subtitle={t.membershipPage.register.subtitle}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative pt-8 border-t border-gray-300"
            >
              
              {/* Animated Top Accent */}
              <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

              <div className="flex items-start gap-6 md:gap-8">
                
                {/* Large Step Number */}
                <div className="flex-shrink-0">
                  <span className="block text-6xl md:text-7xl font-bold leading-none text-[#D4AF37] group-hover:text-[#660033] transition-colors duration-300 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-[#660033] mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.desc}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToRegister;