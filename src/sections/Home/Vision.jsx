import { useLanguage } from '../../hooks/useLanguage';

const Vision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-maroon relative overflow-hidden">
      {/* Subtle background pattern/texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-white rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 border-[30px] border-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="w-16 h-1 bg-gold mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            {t.vision.title}
          </h2>
        </div>

        {/* Vision Statement */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 leading-relaxed md:leading-snug font-light">
          "{t.vision.desc}"
        </p>

      </div>
    </section>
  );
};

export default Vision;