import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Split Layout Grid */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Sticky Title */}
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <SectionTitle title={t.mission.title} />
              <p className="text-gray-500 mt-6 text-sm leading-relaxed max-w-sm">
                Guided by our core objectives, we strive to create a lasting impact on our alma mater and the wider community.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Mission Items List */}
          <div className="md:col-span-8">
            <div className="flex flex-col space-y-12">
              {t.mission.items.map((item, index) => (
                <div key={index} className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                  
                  {/* Minimalist Gold Accent Line */}
                  <div className="hidden md:block w-12 h-0.5 bg-gold mt-4 flex-shrink-0 group-hover:w-16 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-maroon mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
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

export default Mission;