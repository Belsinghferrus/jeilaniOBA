import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

// Minimalist Line Icons
const Icons = {
  subscribe: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  archive: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  contribute: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  )
};

const NewsletterActions = () => {
  const { t, lang } = useLanguage();
  const actions = t.newsletterPage.actions;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {actions.overline}
            </span>
          </div>
          <SectionTitle title={actions.title} subtitle={actions.subtitle} />
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
          {actions.items.map((item, index) => {
            const IconComponent = Icons[item.icon] || Icons.subscribe;
            return (
              <div 
                key={index} 
                className="group flex flex-col border-t border-gray-300 pt-8 relative"
              >
                
                {/* Animated Top Accent */}
                <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

                {/* Ghost Number */}
                <span className="text-5xl md:text-6xl font-bold text-gray-100 group-hover:text-[#D4AF37] transition-colors duration-300 leading-none mb-6 select-none">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="text-[#660033] group-hover:text-[#D4AF37] transition-colors duration-300 mb-6">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#660033] mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base mb-8 flex-1">
                  {item.desc}
                </p>

                {/* CTA Link */}
                <Link 
                  to={`/${lang}/contact`} 
                  className="inline-flex items-center space-x-2 text-[#660033] font-bold text-sm tracking-wider uppercase border-b-2 border-[#D4AF37] pb-1 self-start hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <span>{item.cta}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NewsletterActions;