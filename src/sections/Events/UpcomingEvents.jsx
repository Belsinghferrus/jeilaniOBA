import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

// Inline Icons
const PinIcon = ({ className = "w-5 h-5 text-[#D4AF37]" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5 text-[#D4AF37]" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const UpcomingEvents = () => {
  const { t, lang } = useLanguage();
  const { featured, items, featuredLabel, registerBtn, overline, title, subtitle } = t.eventsPage.upcoming;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {overline}
            </span>
          </div>
          <SectionTitle title={title} subtitle={subtitle} />
        </div>

        {/* FEATURED EVENT */}
        <div className="mb-20 bg-offwhite shadow-sm overflow-hidden grid md:grid-cols-12">
          
          {/* Date Block */}
          <div className="md:col-span-4 relative bg-[#660033] flex items-center justify-center p-10 md:p-14 min-h-[220px]">
            
            {/* Subtle geometric decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 border-[30px] border-white rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              {/* Featured Label */}
              <span className="inline-block bg-[#D4AF37] text-[#660033] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 mb-6">
                {featuredLabel}
              </span>
              
              {/* Big Date */}
              <div className="text-white">
                <span className="block text-7xl md:text-8xl font-bold leading-none">
                  {featured.day}
                </span>
                <span className="block text-xl md:text-2xl tracking-widest uppercase text-[#D4AF37] mt-2 font-semibold">
                  {featured.month} {featured.year}
                </span>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="md:col-span-8 p-8 md:p-14 flex flex-col justify-center bg-white">
            
            <h3 className="text-2xl md:text-4xl font-bold text-[#660033] mb-6 leading-tight">
              {featured.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
              {featured.desc}
            </p>

            {/* Event Meta */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 border-t border-gray-200 pt-6 mb-8">
              <div className="flex items-center gap-3">
                <PinIcon />
                <span className="text-sm md:text-base text-gray-600">{featured.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon />
                <span className="text-sm md:text-base text-gray-600">{featured.time}</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link 
                to={`/${lang}/contact`} 
                className="inline-flex items-center space-x-2 bg-[#660033] text-white font-semibold px-8 py-4 hover:bg-[#D4AF37] hover:text-[#660033] transition-colors duration-300"
              >
                <span>{registerBtn}</span>
                <ArrowIcon />
              </Link>
            </div>

          </div>

        </div>

        {/* OTHER UPCOMING EVENTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col border-t border-gray-300 pt-8 relative"
            >
              
              {/* Animated Top Accent */}
              <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

              {/* Compact Date */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-[#660033] group-hover:text-[#D4AF37] transition-colors duration-300 leading-none">
                  {item.day}
                </span>
                <span className="text-sm tracking-widest uppercase font-bold text-gray-500">
                  {item.month} {item.year}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-lg md:text-xl font-bold text-[#660033] mb-4 leading-tight">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                {item.desc}
              </p>

              {/* Meta Info */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <PinIcon className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ClockIcon className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>{item.time}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;