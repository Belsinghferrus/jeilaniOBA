import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

// Helper to generate a dummy avatar from the name
const getAvatarUrl = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=660033&color=ffffff&bold=true&size=400`;
};

const OfficeBearers = () => {
  const { t } = useLanguage();
  const members = t.committeePage.officers.members;
  const chairman = members[0];
  const otherOfficers = members.slice(1);

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {t.committeePage.officers.overline}
            </span>
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
          </div>
          <SectionTitle title={t.committeePage.officers.title} />
        </div>

        {/* FEATURED: Chairman */}
        <div className="mb-16">
          <div className="bg-white shadow-lg overflow-hidden grid md:grid-cols-12">
            
            {/* Chairman Portrait */}
            <div className="md:col-span-4 relative aspect-square md:aspect-auto">
              <img 
                src={getAvatarUrl(chairman.name)} 
                alt={chairman.name}
                className="w-full h-full object-cover"
              />
              {/* Gold vertical accent bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#D4AF37]"></div>
            </div>

            {/* Chairman Details */}
            <div className="md:col-span-8 p-10 md:p-14 flex flex-col justify-center">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-4">
                {t.committeePage.officers.featured}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-[#660033] mb-4 leading-tight">
                {chairman.name}
              </h3>
              <div className="w-16 h-1 bg-[#660033] mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {chairman.role}
              </p>
            </div>

          </div>
        </div>

        {/* GRID: Other Office Bearers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {otherOfficers.map((member, index) => (
            <div key={index} className="group flex flex-col">
              
              {/* Portrait */}
              <div className="w-full aspect-square bg-white overflow-hidden relative border border-gray-200 group-hover:border-[#D4AF37] transition-colors duration-300 mb-5">
                <img 
                  src={getAvatarUrl(member.name)} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Gold bottom bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>

              {/* Details */}
              <h4 className="text-base md:text-lg font-bold text-[#660033] mb-1 leading-tight">
                {member.name}
              </h4>
              <div className="w-6 h-0.5 bg-[#D4AF37] mb-2"></div>
              <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfficeBearers;