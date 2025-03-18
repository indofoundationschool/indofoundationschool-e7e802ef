
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Heart, Sparkles, Award, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/indofoundationschool?igsh=czV4OXd6dXVkb3Vi&utm_source=qr", name: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", name: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@indofoundationschool", name: "YouTube" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top wave SVG */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f3f4f6" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,218.7C960,224,1056,160,1152,133.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-24 pb-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 animate-float opacity-30">
          <Sparkles size={50} className="text-school-blue" />
        </div>
        <div className="absolute bottom-40 left-10 animate-pulse opacity-20">
          <Award size={60} className="text-school-blue-dark" />
        </div>
        <div className="absolute top-40 left-1/4 animate-float opacity-20">
          <Flower size={40} className="text-school-blue-light" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-5" variants={item}>
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="overflow-hidden rounded-full bg-white p-2 shadow-md border border-blue-100 transition-all duration-300 group-hover:shadow-xl">
                    <img 
                      src="/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png" 
                      alt="Indo Foundation School Logo" 
                      className="h-16 w-16 object-contain mix-blend-multiply transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <motion.div 
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={16} className="text-school-blue fill-school-blue-light/40" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-bold bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent text-lg">Indo Foundation School</h3>
                  <p className="text-xs text-black/70">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Empowering students with knowledge and values for a brighter future.
              </p>
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-full text-school-blue hover:bg-school-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={item}>
              <h3 className="font-bold text-gray-800 mb-4 relative inline-block">
                <span className="relative z-10">Quick Links</span>
                <motion.div 
                  className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-school-blue to-school-blue-light w-full rounded-full"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </h3>
              <ul className="space-y-3 mt-6">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link to="/" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                    <span>Home</span>
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link to="/about" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                    <span>About Us</span>
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link to="/academics" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                    <span>Academics</span>
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link to="/gallery" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                    <span>Gallery</span>
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link to="/enquire" className="text-gray-600 hover:text-school-blue transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-school-blue/70 group-hover:w-2 transition-all duration-300"></span>
                    <span>Enquire</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div variants={item}>
              <h3 className="font-bold text-gray-800 mb-4 relative inline-block">
                <span className="relative z-10">Contact Us</span>
                <motion.div 
                  className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-school-blue to-school-blue-light w-full rounded-full"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </h3>
              <ul className="space-y-4 mt-6">
                <motion.li 
                  className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="mt-0.5 bg-blue-100 p-1.5 rounded-full">
                    <Mail size={16} className="text-school-blue group-hover:scale-110" />
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-800">indofoundationschool@gmail.com</span>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="mt-0.5 bg-blue-100 p-1.5 rounded-full">
                    <Phone size={16} className="text-school-blue group-hover:scale-110" />
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-800">
                    <p>+91 9896110054</p>
                    <p>+91 9896205966</p>
                    <p>01262237556</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="mt-0.5 bg-blue-100 p-1.5 rounded-full">
                    <MapPin size={16} className="text-school-blue group-hover:scale-110" />
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-800">Plot No 42/8, Shivaji Colony Rohtak, Haryana 124001</span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div variants={item}>
              <h3 className="font-bold text-gray-800 mb-4 relative inline-block">
                <span className="relative z-10">School Hours</span>
                <motion.div 
                  className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-school-blue to-school-blue-light w-full rounded-full"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </h3>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-md mt-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <ul className="space-y-2">
                  <li className="text-gray-600 flex justify-between items-center">
                    <span className="font-medium">Monday - Friday:</span> 
                    <span className="bg-blue-50 px-2 py-1 rounded text-sm">8:00 AM - 3:00 PM</span>
                  </li>
                  <li className="text-gray-600 flex justify-between items-center">
                    <span className="font-medium">Saturday:</span> 
                    <span className="bg-blue-50 px-2 py-1 rounded text-sm">8:00 AM - 12:00 PM</span>
                  </li>
                  <li className="text-gray-600 flex justify-between items-center">
                    <span className="font-medium">Sunday:</span> 
                    <span className="bg-blue-50 px-2 py-1 rounded text-sm">Closed</span>
                  </li>
                  <Separator className="my-2 bg-blue-100" />
                  <li className="text-gray-600 flex justify-between items-center">
                    <span className="font-medium">Office Hours:</span> 
                    <span className="bg-blue-50 px-2 py-1 rounded text-sm">9:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="border-t border-blue-200 mt-12 pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
              &copy; {currentYear} Indo Foundation School. All rights reserved. Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> in India
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
