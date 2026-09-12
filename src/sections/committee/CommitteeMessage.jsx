import { useLanguage } from '../../hooks/useLanguage';

const CommitteeMessage = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#660033] relative overflow-hidden">
      
      {/* Subtle Background Geometric Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border-[50px] border-white rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] border-[35px] border-[#D4AF37] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Title */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-10 h-0.5 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
                From the Committee
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.committeeMessage.title}
            </h2>
          </div>

          {/* RIGHT COLUMN: Message */}
          <div className="md:col-span-8 md:pl-12 md:border-l md:border-white/20">
            
            {/* Large Decorative Quote */}
            <span className="block text-7xl md:text-8xl text-[#D4AF37]/30 font-serif leading-none mb-2 select-none">
              &ldquo;
            </span>

            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8">
              {t.committeeMessage.p1}
            </p>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              {t.committeeMessage.p2}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CommitteeMessage;