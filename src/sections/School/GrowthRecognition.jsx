import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const GrowthRecognition = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Title */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionTitle title={t.schoolPage.growth.title} />
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="md:col-span-8">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
              <p>{t.schoolPage.growth.p1}</p>
              <p>{t.schoolPage.growth.p2}</p>
            </div>
          </div>

        </div>

        {/* Highlight Callout */}
        <div className="mt-20 bg-[#660033] relative overflow-hidden">
          
          {/* Subtle geometric decoration */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] border-[40px] border-white rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] border-[30px] border-[#D4AF37] rounded-full"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center p-10 md:p-16">
            
            {/* Left: Overline + Value */}
            <div className="md:col-span-5">
              <p className="text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-4">
                {t.schoolPage.growth.highlight.label}
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {t.schoolPage.growth.highlight.value}
              </h3>
            </div>

            {/* Right: Description */}
            <div className="md:col-span-7 md:pl-12 md:border-l md:border-white/20">
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                {t.schoolPage.growth.highlight.desc}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GrowthRecognition;