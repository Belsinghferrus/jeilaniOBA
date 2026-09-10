import { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Navbar = () => {
  const { lang } = useParams();
  const location = useLocation();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentPath = location.pathname.split('/').slice(2).join('/');

  const topLinks = [
    { name: t.nav.news, path: 'news' },
    { name: t.nav.events, path: 'events' },
    { name: t.nav.gallery, path: 'gallery' },
    { name: t.nav.contact, path: 'contact' },
  ];

  const mainLinks = [
    { name: t.nav.home, path: '' },
    { name: t.nav.about, path: 'about' },
    { name: t.nav.school, path: 'school' },
    { name: t.nav.committee, path: 'committee' },
    { name: t.nav.projects, path: 'projects' },
    { name: t.nav.membership, path: 'membership' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex flex-col">
      
      {/* Top Utility Bar (Hidden on mobile) */}
      <div className="hidden md:flex justify-end items-center bg-black/60 backdrop-blur-sm text-white/80 text-xs py-2 px-8 space-x-6">
        {topLinks.map((link) => (
          <Link key={link.name} to={`/${lang}/${link.path}`} className="hover:text-gold transition">
            {link.name}
          </Link>
        ))}
        <Link to={`/${lang === 'en' ? 'ta' : 'en'}/${currentPath}`} className="hover:text-gold transition font-semibold border border-white/30 px-3 py-0.5 rounded">
          {lang === 'en' ? 'தமிழ்' : 'English'}
        </Link>
      </div>

      {/* Main Navigation Bar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
        
        {/* Logo */}
        <Link to={`/${lang}`} className="text-xl md:text-2xl font-bold tracking-wider text-white">
          R/JEILANI OBA
        </Link>

        {/* Desktop Main Menu */}
        <nav className="hidden lg:flex space-x-8 items-center text-white text-sm font-medium">
          {mainLinks.map((link) => (
            <Link 
              key={link.name} 
              to={`/${lang}/${link.path}`} 
              className="hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Register Button (Like HBKU Apply Now) */}
          <Link 
            to={`/${lang}/membership`} 
            className="hidden sm:block bg-white text-maroon font-bold px-6 py-2 rounded hover:bg-gold hover:text-white transition-colors duration-300 text-sm"
          >
            {t.nav.register}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-maroon-dark text-white absolute top-full left-0 w-full shadow-2xl">
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {/* Language Toggle for Mobile */}
            <Link 
              to={`/${lang === 'en' ? 'ta' : 'en'}/${currentPath}`} 
              className="border border-white/30 px-4 py-2 text-center rounded hover:bg-white hover:text-maroon transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {lang === 'en' ? 'தமிழ்' : 'English'}
            </Link>
            
            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link 
                key={link.name} 
                to={`/${lang}/${link.path}`} 
                className="hover:text-gold transition-colors text-lg border-b border-white/10 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Top Links for Mobile */}
            <div className="pt-4 flex flex-wrap gap-4 text-sm text-gray-300">
              {topLinks.map((link) => (
                <Link key={link.name} to={`/${lang}/${link.path}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;