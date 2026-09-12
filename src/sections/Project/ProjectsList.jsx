import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const ProjectsList = () => {
  const { t } = useLanguage();
  const { featured, items, statusOngoing, statusCompleted, impactLabel, featuredLabel } = t.projectsPage.list;

  // Helper to render status badge
  const StatusBadge = ({ status }) => {
    const isOngoing = status === 'Ongoing';
    return (
      <span className={`inline-flex items-center space-x-2 text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1 ${
        isOngoing 
          ? 'bg-[#D4AF37] text-[#660033]' 
          : 'bg-gray-200 text-gray-600'
      }`}>
        {isOngoing ? statusOngoing : statusCompleted}
      </span>
    );
  };

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {t.projectsPage.list.overline}
            </span>
          </div>
          <SectionTitle title={t.projectsPage.list.title} />
        </div>

        {/* FEATURED PROJECT */}
        <div className="mb-20 bg-white shadow-sm overflow-hidden grid md:grid-cols-12">
          
          {/* Featured Image */}
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto min-h-[300px] bg-[#660033]">
            <img 
              src="/images/project-featured.jpg" 
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#660033]/70 via-transparent to-transparent"></div>
            
            {/* Featured Label */}
            <div className="absolute top-6 left-6">
              <span className="bg-[#D4AF37] text-[#660033] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
                {featuredLabel}
              </span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-6">
              <StatusBadge status={featured.status} />
              <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">
                {featured.year}
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold text-[#660033] mb-6 leading-tight">
              {featured.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
              {featured.desc}
            </p>

            {/* Impact Stat */}
            <div className="border-t border-gray-200 pt-6">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] block mb-2">
                {impactLabel}
              </span>
              <p className="text-lg md:text-xl font-bold text-[#660033]">
                {featured.impact}
              </p>
            </div>

          </div>

        </div>

        {/* OTHER PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {items.map((item, index) => (
            <div key={index} className="group flex flex-col border-t border-gray-300 pt-6 relative">
              
              {/* Animated top accent */}
              <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

              {/* Status + Year */}
              <div className="flex items-center gap-3 mb-5">
                <StatusBadge status={item.status} />
                <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-lg md:text-xl font-bold text-[#660033] mb-4 leading-tight">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                {item.desc}
              </p>

              {/* Impact */}
              <div className="border-t border-gray-200 pt-4">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] block mb-1">
                  {impactLabel}
                </span>
                <p className="text-sm font-bold text-[#660033]">
                  {item.impact}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsList;