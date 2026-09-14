import { Link, useParams } from 'react-router-dom';

// Simple Inline Icons for Socials
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const Footer = () => {
  const { lang } = useParams();

  return (
    <footer className="bg-gray-50 text-gray-800 pt-20 pb-8 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand, Socials & Subscribe */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold text-maroon mb-6 tracking-tight">
              R/Jeilani<br />OBA
            </h3>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8 text-gray-600">
              <a href="#" className="hover:text-maroon transition-colors"><LinkedInIcon /></a>
              <a href="#" className="hover:text-maroon transition-colors"><XIcon /></a>
              <a href="#" className="hover:text-maroon transition-colors"><FacebookIcon /></a>
            </div>

            {/* Subscribe Button */}
            <button className="bg-maroon text-white text-sm font-semibold px-6 py-3 hover:bg-maroon-dark transition-colors duration-300 w-full md:w-auto text-center">
              SUBSCRIBE TO NEWSLETTER
            </button>
          </div>

          {/* Column 2: People & Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">People</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link to={`/${lang}/about`} className="hover:text-maroon transition-colors">About Us</Link></li>
              <li><Link to={`/${lang}/about`} className="hover:text-maroon transition-colors">Who We Are</Link></li>
              <li><Link to={`/${lang}/about`} className="hover:text-maroon transition-colors">Responsibilities</Link></li>
              <li><Link to={`/${lang}/about`} className="hover:text-maroon transition-colors">Awards and Recognition</Link></li>
              <li><Link to={`/${lang}/contact`} className="hover:text-maroon transition-colors">Locations</Link></li>
            </ul>

            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mt-8 mb-6">News & Insights</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link to={`/${lang}/events`} className="hover:text-maroon transition-colors">Events</Link></li>
              <li><Link to={`/${lang}/news`} className="hover:text-maroon transition-colors">Insights</Link></li>
              <li><Link to={`/${lang}/news`} className="hover:text-maroon transition-colors">News</Link></li>
            </ul>

          </div>

          {/* Column 3: Projects */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">Projects</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link to={`/${lang}/projects`} className="hover:text-maroon transition-colors">Scholarships & Educational Support</Link></li>
              <li><Link to={`/${lang}/projects`} className="hover:text-maroon transition-colors">Infrastructure Development</Link></li>
              <li><Link to={`/${lang}/projects`} className="hover:text-maroon transition-colors">Sports & Extracurricular</Link></li>
              <li><Link to={`/${lang}/projects`} className="hover:text-maroon transition-colors">Community Welfare</Link></li>
              <li><Link to={`/${lang}/projects`} className="hover:text-maroon transition-colors">Mentorship Programs</Link></li>
              <li><Link to={`/${lang}/projects`} className="hover:text-maroon transition-colors">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">Social</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#" className="hover:text-maroon transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">YouTube</a></li>
            </ul>

            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mt-8 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Dehigastalawa, Balangoda, Sri Lanka</li>
              <li>Email: <a href="mailto:email@jeilanioba.lk" className="hover:text-maroon">email@jeilanioba.lk</a></li>
              <li>Phone: +94 XX XXX XXXX</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Divider with & symbol */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-full border-t border-gray-300"></div>
          <span className="relative bg-gray-50 px-4 text-2xl font-serif text-gray-400">&amp;</span>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Old Boys' Association - R/Jeilani Central College. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to={`/${lang}/terms`} className="hover:text-maroon transition-colors">Terms & Conditions</Link>
            <Link to={`/${lang}/privacy`} className="hover:text-maroon transition-colors">Privacy Policy</Link>
            <Link to={`/${lang}/refund`} className="hover:text-maroon transition-colors">Refund Policy</Link>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;