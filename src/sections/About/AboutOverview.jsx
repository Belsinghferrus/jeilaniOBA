import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const AboutOverview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Title */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionTitle title={t.aboutPage.overview.title} />
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Content */}
          <div className="md:col-span-8">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
              <p>{t.aboutPage.overview.p1}</p>
              <p>{t.aboutPage.overview.p2}</p>
              <p>{t.aboutPage.overview.p3}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutOverview;