import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const OurStory = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionTitle title={t.story.title} />
        </div>

        {/* Pull Quote */}
        <div className="relative mb-20 pl-6 md:pl-12 border-l-4 border-[#D4AF37]">
          <span className="absolute -top-10 -left-4 text-8xl text-[#660033]/10 font-serif leading-none select-none">
            &ldquo;
          </span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-[#660033] leading-snug relative z-10">
            {t.story.quote}
          </p>
        </div>

        {/* Two-Column Body Text */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              {t.story.p2}
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              {t.story.p3}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;