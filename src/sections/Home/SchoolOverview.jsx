import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

const SchoolOverview = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="order-2 md:order-1">
            <SectionTitle title={t.schoolOverview.title} />
            
            <p className="text-gray-700 leading-relaxed text-lg text-justify mb-10">
              {t.schoolOverview.desc}
            </p>
            
            {/* Button to redirect to School Page */}
            <Link 
              to={`/${lang}/school`} 
              className="inline-flex items-center space-x-2 bg-maroon text-white font-semibold px-8 py-4 rounded-sm hover:bg-maroon-light transition-colors duration-300 shadow-md"
            >
              <span>{t.schoolOverview.btn}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* RIGHT COLUMN: Image with decorative maroon border */}
          <div className="relative order-1 md:order-2">
            {/* Decorative maroon background block */}
            <div className="absolute inset-0 bg-maroon translate-x-4 translate-y-4 rounded-sm"></div>
            
            {/* Image Placeholder */}
            <img 
              src="/images/school-campus.jpg" 
              alt="R/Jeilani Central College Campus" 
              className="relative z-10 w-full h-[400px] object-cover rounded-sm shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolOverview;