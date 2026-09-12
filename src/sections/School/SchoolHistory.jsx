import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const SchoolHistory = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Title */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionTitle title={t.schoolPage.history.title} />
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Timeline */}
          <div className="md:col-span-8 relative">
            
            {/* Vertical Line */}
            <div className="absolute left-[29px] md:left-[39px] top-3 bottom-3 w-px bg-gray-200"></div>

            <div className="space-y-14">
              {t.schoolPage.history.timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  
                  {/* Year Marker */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full bg-[#660033] flex items-center justify-center shadow-md">
                      <span className="text-white text-sm md:text-base font-bold tracking-wider">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4 flex-1">
                    <div className="w-8 h-0.5 bg-[#D4AF37] mb-4"></div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SchoolHistory;