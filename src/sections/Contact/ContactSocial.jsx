import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

// Social Media Icons (outline style)
const Icons = {
  Facebook: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  X: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 16M20 4L4 20" />
    </svg>
  ),
  TikTok: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.5a6.5 6.5 0 01-6.5-6.5h-3.5v13.5a4 4 0 11-4-4v-3.5a7.5 7.5 0 107.5 7.5V9.75a10 10 0 006.5 2.25z" />
    </svg>
  ),
  YouTube: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <rect x="2.5" y="6" width="19" height="12" rx="3" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 9.5l5 2.5-5 2.5v-5z" />
    </svg>
  )
};

const ContactSocial = () => {
  const { t } = useLanguage();
  const social = t.contactPage.social;

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {social.overline}
            </span>
          </div>
          <SectionTitle title={social.title} subtitle={social.subtitle} />
        </div>

        {/* Social Channels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {social.channels.map((channel, index) => {
            const IconComponent = Icons[channel.name] || Icons.Facebook;
            return (
              <a
                key={index}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start border-t border-gray-300 pt-6 relative"
              >
                
                {/* Animated Top Accent */}
                <div className="absolute top-0 left-0 h-px bg-[#660033] w-0 group-hover:w-full transition-all duration-500"></div>

                {/* Icon */}
                <div className="text-[#660033] group-hover:text-[#D4AF37] transition-colors duration-300 mb-6">
                  <IconComponent />
                </div>

                {/* Platform Name */}
                <h4 className="text-base md:text-lg font-bold text-[#660033] mb-2 leading-tight">
                  {channel.name}
                </h4>

                {/* Handle */}
                <span className="text-xs md:text-sm text-gray-500 tracking-wider font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
                  {channel.handle}
                </span>

              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactSocial;