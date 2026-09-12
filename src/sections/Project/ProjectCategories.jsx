import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const ProjectCategories = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {t.projectsPage.categories.overline}
            </span>
          </div>
          <SectionTitle title={t.projectsPage.categories.title} />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {t.projectsPage.categories.items.map((item, index) => (
            <div 
              key={index} 
              className="group border-t border-gray-300 pt-8 relative"
            >
              
              {/* Animated Top Accent */}
              <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

              <div className="flex items-start gap-6">
                
                {/* Large Ghost Number */}
                <span className="text-5xl md:text-6xl font-bold text-gray-100 leading-none group-hover:text-[#D4AF37] transition-colors duration-300 select-none">
                  {item.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#660033] mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {item.desc}
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

export default ProjectCategories;