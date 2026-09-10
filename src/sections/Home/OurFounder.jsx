import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const OurFounder = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Portrait Placeholder */}
          <div className="md:col-span-5 relative">
            {/* Decorative background block */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-sm"></div>
            
            {/* Portrait Container (Replace with <img> later) */}
            <div className="relative z-10 w-full aspect-[4/5] bg-maroon rounded-sm shadow-xl flex flex-col items-center justify-center overflow-hidden">
              {/* Subtle geometric pattern inside */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 border-[20px] border-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-[15px] border-gold rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
              
              {/* Placeholder Icon / Initials */}
              <div className="relative z-10 text-center">
                <svg className="w-20 h-20 text-gold/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-gold/70 text-sm tracking-widest uppercase font-semibold">Portrait</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Founder Details */}
          <div className="md:col-span-7">
            {/* Overline */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-0.5 bg-gold"></span>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">
                Founding Legacy
              </span>
            </div>

            {/* Founder Name */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-6 leading-tight">
              {t.founder.name}
            </h3>

            {/* Optional Subtitles / Role (Can be hardcoded or moved to JSON) */}
            <p className="text-lg text-gray-500 font-medium mb-8">
              Founding Figure, Old Boys' Association
            </p>

            {/* Description with a decorative quote mark */}
            <div className="relative">
              <span className="absolute -top-6 -left-4 text-8xl text-maroon/5 font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="relative z-10 text-gray-700 leading-relaxed text-lg text-justify">
                {t.founder.desc}
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurFounder;