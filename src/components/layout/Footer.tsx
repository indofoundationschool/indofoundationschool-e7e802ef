
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/indofoundationschool?igsh=czV4OXd6dXVkb3Vi&utm_source=qr", name: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", name: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@indofoundationschool", name: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-5">
            <div className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png" 
                alt="Indo Foundation School Logo" 
                className="h-16 w-auto mix-blend-multiply transition-all duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="font-bold text-school-blue text-lg">Indo Foundation School</h3>
                <p className="text-xs text-black/70">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Empowering students with knowledge and values for a brighter future.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-full text-school-blue hover:bg-school-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:-bottom-1 after:left-0 after:bg-school-blue">Quick Links</h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                  <span>Academics</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/enquire" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                  <span>Enquire</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:-bottom-1 after:left-0 after:bg-school-blue">Contact Us</h3>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300">
                <Mail size={18} className="text-school-blue mt-0.5 group-hover:scale-110" />
                <span className="text-gray-600 group-hover:text-gray-800">indofoundationschool@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300">
                <Phone size={18} className="text-school-blue mt-0.5 group-hover:scale-110" />
                <div className="text-gray-600 group-hover:text-gray-800">
                  <p>+91 9896110054</p>
                  <p>+91 9896205966</p>
                  <p>01262237556</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300">
                <MapPin size={18} className="text-school-blue mt-0.5 group-hover:scale-110" />
                <span className="text-gray-600 group-hover:text-gray-800">Plot No 42/8, Shivaji Colony Rohtak, Haryana 124001</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:-bottom-1 after:left-0 after:bg-school-blue">School Hours</h3>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm mt-6 border border-blue-100">
              <ul className="space-y-2">
                <li className="text-gray-600 flex justify-between">
                  <span className="font-medium">Monday - Friday:</span> 
                  <span>8:00 AM - 3:00 PM</span>
                </li>
                <li className="text-gray-600 flex justify-between">
                  <span className="font-medium">Saturday:</span> 
                  <span>8:00 AM - 12:00 PM</span>
                </li>
                <li className="text-gray-600 flex justify-between">
                  <span className="font-medium">Sunday:</span> 
                  <span>Closed</span>
                </li>
                <Separator className="my-2 bg-blue-100" />
                <li className="text-gray-600 flex justify-between">
                  <span className="font-medium">Office Hours:</span> 
                  <span>9:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            &copy; {currentYear} Indo Foundation School. All rights reserved. Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
