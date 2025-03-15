import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com", name: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", name: "Facebook" },
    { icon: Youtube, url: "https://youtube.com", name: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-school-blue/10 to-school-blue/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png" 
                alt="Indo Foundation School Logo" 
                className="h-14 w-auto mix-blend-multiply"
              />
              <div>
                <h3 className="font-bold text-school-blue text-lg">Indo Foundation School</h3>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering students with knowledge and values for a brighter future.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full text-school-blue hover:bg-school-blue hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-school-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-school-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-600 hover:text-school-blue transition-colors">Academics</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-school-blue transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/enquire" className="text-gray-600 hover:text-school-blue transition-colors">Enquire</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-school-blue mt-0.5" />
                <span className="text-gray-600">indofoundationschool@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-school-blue mt-0.5" />
                <div className="text-gray-600">
                  <p>+91 9896110054</p>
                  <p>+91 9896205966</p>
                  <p>01262237556</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-school-blue mt-0.5" />
                <span className="text-gray-600">Rohtak, Haryana, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">School Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">Monday - Friday:</span> 8:00 AM - 3:00 PM
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Saturday:</span> 8:00 AM - 12:00 PM
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Sunday:</span> Closed
              </li>
              <li className="text-gray-600 pt-2">
                <span className="font-medium">Office Hours:</span> 9:00 AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Indo Foundation School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
