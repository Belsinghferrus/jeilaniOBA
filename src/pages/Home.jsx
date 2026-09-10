import HeroVideo from '../components/HeroVideo';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. Hero Video Section */}
      <HeroVideo />
      
      {/* 2. Who We Are Section */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-8 relative inline-block">
            {t.whoWeAre.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gold transform translate-y-2"></span>
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify md:text-center">
            <p>{t.whoWeAre.p1}</p>
            <p>{t.whoWeAre.p2}</p>
            <p>{t.whoWeAre.p3}</p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 max-w-5xl">
          
          {/* Vision Card */}
          <div className="bg-offwhite p-10 rounded-xl border-t-4 border-maroon shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-2xl font-bold text-maroon mb-4 flex items-center">
              <span className="w-3 h-3 bg-gold rounded-full mr-3"></span>
              {t.vision.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{t.vision.desc}</p>
          </div>

          {/* Mission Card */}
          <div className="bg-offwhite p-10 rounded-xl border-t-4 border-gold shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-2xl font-bold text-maroon mb-4 flex items-center">
              <span className="w-3 h-3 bg-maroon rounded-full mr-3"></span>
              {t.mission.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{t.mission.desc}</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;