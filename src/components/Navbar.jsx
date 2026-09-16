import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import FeedbackDialog from './FeedbackDialog';   // ← ADDED
import logowhite from '../assets/images/logo-white1.png';
import logomaroon from '../assets/images/logo-maroon.png';
import oba from '../assets/images/oba.png';
import obaWhite from '../assets/images/oba-white.png';

// Simple Inline Icons
const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const GlobeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const CapIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
);
const ChevronDown = () => (
    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);

const Navbar = () => {
    const { lang } = useParams();
    const location = useLocation();
    const { t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    // Handle scroll event to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentPath = location.pathname.split('/').slice(2).join('/');

    const topLinks = [
        { name: t.nav.news || 'Newsroom', path: 'news' },
        { name: t.nav.events || 'Events', path: 'events' },
        { name: t.nav.contact || 'Contact us', path: 'contact' },
    ];

    const mainLinks = [
        { name: t.nav.about || 'About', path: 'about', hasDropdown: false },
        { name: t.nav.school || 'Our School', path: 'school', hasDropdown: false },
        { name: t.nav.committee || 'Committee', path: 'committee', hasDropdown: false },
        { name: t.nav.projects || 'Projects', path: 'projects', hasDropdown: false },
        { name: t.nav.membership || 'Membership', path: 'membership', hasDropdown: false },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 flex transition-all duration-300 ${isScrolled
                        ? 'bg-white text-maroon shadow-md border-b border-gray-200'
                        : 'bg-transparent text-white'
                    }`}
            >

                {/* LEFT: Logo Area */}
                <div className={`hidden lg:flex items-center justify-center px-8 border-r transition-colors duration-300 ${isScrolled ? 'border-gray-200' : 'border-white/20'
                    }`}>
                    <Link to={`/${lang}`} className="flex items-center">
                        <img
                            src={obaWhite}
                            alt="Jeilani OBA"
                            className={`h-22 xl:h-28 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-0 absolute' : 'opacity-100 relative'
                                }`}
                        />
                        <img
                            src={oba}
                            alt="Jeilani OBA"
                            className={`h-22 xl:h-28 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-100 relative' : 'opacity-0 absolute'
                                }`}
                        />
                    </Link>
                </div>

                {/* RIGHT: Menu Area */}
                <div className="flex-1 flex flex-col">

                    {/* TOP ROW: Utility Links */}
                    <div className={`hidden lg:flex items-center justify-end px-8 h-12 border-b space-x-6 text-xs xl:text-sm font-medium transition-colors duration-300 ${isScrolled
                            ? 'border-gray-200 text-gray-600'
                            : 'border-white/20 text-white/80 drop-shadow-md'
                        }`}>
                        {topLinks.map((link) => (
                            <Link key={link.name} to={`/${lang}/${link.path}`} className="hover:text-gold transition-colors">
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsFeedbackOpen(true)}
                            className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                        >
                            {t.feedback.navLabel}
                        </button>
                        <button className="hover:text-gold transition-colors">
                            <SearchIcon />
                        </button>
                    </div>

                    {/* BOTTOM ROW: Main Nav & Actions */}
                    <div className="flex items-center justify-between px-4 lg:px-8 h-20 lg:h-16 transition-colors duration-300">

                        {/* Mobile Menu Button & Logo */}
                        <div className="flex lg:hidden items-center space-x-4 transition-colors duration-300">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`text-3xl transition-colors duration-300 ${isScrolled ? 'text-maroon' : 'text-white drop-shadow-md'
                                    }`}
                            >
                                ☰
                            </button>
                            <Link to={`/${lang}`} className="flex items-center">
                                <img
                                    src={obaWhite}
                                    alt="Jeilani OBA"
                                    className={`h-16 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-0 absolute' : 'opacity-100 relative'
                                        }`}
                                />
                                <img
                                    src={oba}
                                    alt="Jeilani OBA"
                                    className={`h-16 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-100 relative' : 'opacity-0 absolute'
                                        }`}
                                />
                            </Link>
                        </div>

                        {/* Desktop Main Navigation */}
                        <nav className={`hidden lg:flex items-center space-x-8 text-sm xl:text-base font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                            }`}>
                            {mainLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={`/${lang}/${link.path}`}
                                    className="flex items-center hover:text-gold transition-colors"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown />}
                                </Link>
                            ))}
                        </nav>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4 lg:space-x-6">

                            {/* Language Toggle (Desktop) */}
                            <Link
                                to={`/${lang === 'en' ? 'ta' : 'en'}/${currentPath}`}
                                className={`hidden lg:flex items-center space-x-2 text-sm font-medium transition-colors duration-300 hover:text-gold ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                                    }`}
                            >
                                <GlobeIcon />
                                <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
                            </Link>

                            {/* Search Icon (Mobile only) */}
                            <button className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-maroon' : 'text-white drop-shadow-md'}`}>
                                <SearchIcon />
                            </button>

                            {/* Register Button */}
                            <Link
                                to={`/${lang}/membership`}
                                className={`font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded flex items-center space-x-2 transition-all duration-300 text-sm shadow-lg ${isScrolled
                                        ? 'bg-maroon text-white hover:bg-maroon-light'
                                        : 'bg-white text-black hover:bg-gold hover:text-white'
                                    }`}
                            >
                                <CapIcon />
                                <span className="hidden sm:inline">{t.nav.register || 'Register'}</span>
                            </Link>

                            {/* User/Portal Login Button */}
                            <button className={`hidden sm:flex p-2 lg:p-2.5 rounded transition-all duration-300 shadow-lg ${isScrolled
                                    ? 'bg-gold text-maroon hover:bg-maroon hover:text-white'
                                    : 'bg-gold text-maroon hover:bg-white'
                                }`}>
                                <UserIcon />
                            </button>

                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className={`lg:hidden absolute top-full left-0 w-full border-t shadow-2xl transition-colors duration-300 ${isScrolled ? 'bg-white border-gray-200' : 'bg-maroon-dark border-white/10'
                        }`}>
                        <nav className="flex flex-col px-6 py-6 space-y-5">
                            <Link
                                to={`/${lang === 'en' ? 'ta' : 'en'}/${currentPath}`}
                                className={`flex items-center space-x-2 text-sm font-medium border px-4 py-2 rounded ${isScrolled ? 'border-gray-300 text-gray-800' : 'border-white/20 text-white'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <GlobeIcon />
                                <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
                            </Link>

                            <div className="flex flex-col space-y-4 pt-2">
                                {mainLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={`/${lang}/${link.path}`}
                                        className={`flex justify-between items-center text-lg border-b pb-3 ${isScrolled ? 'border-gray-200 text-gray-800' : 'border-white/10 text-white'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown />}
                                    </Link>
                                ))}
                            </div>

                            <div className={`pt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm ${isScrolled ? 'text-gray-500' : 'text-gray-300'
                                }`}>
                                {topLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={`/${lang}/${link.path}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                {/* Feedback (Mobile) */}
                                <button
                                    onClick={() => { setIsMobileMenuOpen(false); setIsFeedbackOpen(true); }}
                                    className="hover:text-[#D4AF37] transition-colors"
                                >
                                    {t.feedback.navLabel}
                                </button>
                            </div>
                        </nav>
                    </div>
                )}

            </header>

            {/* Feedback Dialog */}
            <FeedbackDialog
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
            />
        </>
    );
};

export default Navbar;