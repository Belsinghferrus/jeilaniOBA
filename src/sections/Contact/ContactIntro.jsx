import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

// Minimalist Line Icons
const Icon = {
  pin: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  mail: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  phone: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  clock: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

const ContactIntro = () => {
  const { t } = useLanguage();
  const intro = t.contactPage.intro;
  const info = intro.info;

  const contactItems = [
    { Icon: Icon.pin, label: info.addressLabel, value: info.addressValue },
    { Icon: Icon.mail, label: info.emailLabel, value: info.emailValue, href: `mailto:${info.emailValue}` },
    { Icon: Icon.phone, label: info.phoneLabel, value: info.phoneValue, href: `tel:${info.phoneValue}` },
    { Icon: Icon.clock, label: info.hoursLabel, value: info.hoursValue }
  ];

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
                  {intro.overline}
                </span>
              </div>
              
              <SectionTitle title={intro.title} />
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="md:col-span-8">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg text-justify">
              <p>{intro.p1}</p>
              <p>{intro.p2}</p>
            </div>
          </div>

        </div>

        {/* Contact Info Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-gray-200 pt-12">
          {contactItems.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <div key={index} className="group flex flex-col">
                
                {/* Icon */}
                <div className="text-[#660033] group-hover:text-[#D4AF37] transition-colors duration-300 mb-5">
                  <IconComponent />
                </div>

                {/* Label */}
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3">
                  {item.label}
                </span>

                {/* Value */}
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="text-[#660033] font-semibold text-base md:text-lg leading-snug hover:text-[#D4AF37] transition-colors break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[#660033] font-semibold text-base md:text-lg leading-snug">
                    {item.value}
                  </p>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactIntro;