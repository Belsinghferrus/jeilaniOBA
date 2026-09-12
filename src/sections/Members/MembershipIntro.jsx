import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const MembershipIntro = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Title */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              
              {/* Overline */}
              <div className="flex items-center space-x-3 mb-5">
                <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
                  {t.membershipPage.intro.overline}
                </span>
              </div>
              
              <SectionTitle title={t.membershipPage.intro.title} />
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="md:col-span-8">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
              <p>{t.membershipPage.intro.p1}</p>
              <p>{t.membershipPage.intro.p2}</p>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid md:grid-cols-3 border-t border-gray-200 pt-12 gap-y-10">
          {t.membershipPage.intro.stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-start md:items-center md:text-center ${
                index !== 0 ? 'md:border-l md:border-gray-200' : ''
              }`}
            >
              <span className="text-3xl md:text-4xl font-bold text-[#660033] mb-2 leading-tight">
                {stat.value}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MembershipIntro;