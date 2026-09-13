import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const EventsAbout = () => {
  const { t } = useLanguage();
  const about = t.eventsPage.about;

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
                  {about.overline}
                </span>
              </div>
              
              <SectionTitle title={about.title} />
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="md:col-span-8">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
              <p>{about.p1}</p>
              <p>{about.p2}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EventsAbout;