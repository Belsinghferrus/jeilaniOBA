import { Link, useParams } from 'react-router-dom';

const Footer = () => {
  const { lang } = useParams();

  return (
    <footer className="bg-maroon text-white py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Column */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gold">R/Jeilani OBA</h3>
          <p className="text-sm text-gray-300">
            A proud fellowship of alumni of R/Jeilani Central College, Dehigastalawa, Balangoda.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to={`/${lang}/about`} className="hover:text-gold">Who We Are</Link></li>
            <li><Link to={`/${lang}/projects`} className="hover:text-gold">Our Projects</Link></li>
            <li><Link to={`/${lang}/membership`} className="hover:text-gold">Membership</Link></li>
            <li><Link to={`/${lang}/contact`} className="hover:text-gold">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Dehigastalawa, Balangoda, Sri Lanka</li>
            <li>Email: [email@jeilanioba.lk]</li>
            <li>Phone: [+94 XX XXX XXXX]</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Old Boys' Association - R/Jeilani Central College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;