import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const PresidentMessage = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionTitle title={t.president.title} />
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Portrait Placeholder */}
          <div className="md:col-span-4 relative">
            {/* Decorative gold bottom border */}
            <div className="absolute -bottom-4 left-4 w-full h-full border-b-4 border-gold rounded-sm z-0"></div>
            
            {/* Portrait Container (Replace with <img> later) */}
            <div className="relative z-10 w-full aspect-[3/4] bg-maroon rounded-sm shadow-xl flex flex-col items-center justify-center overflow-hidden">
              {/* Subtle geometric pattern inside */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[30px] border-gold rounded-full"></div>
              </div>
              
              {/* Placeholder Icon / Initials */}
              <div className="relative z-10 text-center">
                <svg className="w-20 h-20 text-gold/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-gold/80 text-sm tracking-widest uppercase font-semibold">Portrait</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Message Content */}
          <div className="md:col-span-8 relative pt-4">
            {/* Decorative Large Quote Mark */}
            <span className="absolute -top-12 -left-6 text-9xl text-maroon/5 font-serif leading-none select-none z-0">
              &ldquo;
            </span>
            
            <div className="relative z-10 space-y-6 text-gray-700 leading-relaxed text-lg text-justify mb-12">
              <p>{t.president.p1}</p>
              <p>{t.president.p2}</p>
              <p>{t.president.p3}</p>
            </div>

            {/* Signature Block */}
            <div className="relative z-10 border-t border-gray-300 pt-8 mt-4 w-full md:w-2/3">
              <h4 className="text-2xl font-serif text-maroon tracking-wide mb-2">
                {t.president.name}
              </h4>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                {t.president.role}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;