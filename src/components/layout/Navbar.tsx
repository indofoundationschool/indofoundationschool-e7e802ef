
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/', isBold: true, className: "text-black" },
    { name: 'About', path: '/about', isBold: true },
    { name: 'Academics', path: '/academics', isBold: true },
    { name: 'Gallery', path: '/gallery', isBold: true },
    { name: 'Enquire', path: '/enquire', isBold: true },
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/indofoundationschool?igsh=czV4OXd6dXVkb3Vi&utm_source=qr", ariaLabel: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", ariaLabel: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@indofoundationschool", ariaLabel: "YouTube" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 px-6 md:px-10 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="overflow-hidden rounded-full bg-white/80 p-1 shadow-sm group-hover:shadow-md transition-all duration-300">
              <img 
                src="/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png" 
                alt="Indo Foundation School Logo" 
                className="h-12 w-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-school-blue">Indo Foundation School</h1>
              <p className="text-xs text-black/80">Excellence in Education</p>
            </div>
          </NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-6"
        >
          <div className="flex space-x-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  cn(
                    "relative px-3 py-2 rounded-md text-gray-700 hover:text-school-blue transition-colors duration-300 ease-in-out overflow-hidden",
                    isActive && "text-school-blue font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-school-blue before:animate-pulse",
                    link.isBold && "font-bold",
                    link.className
                  )
                }
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center space-x-1 ml-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="p-2 text-gray-600 hover:text-school-blue transition-all duration-300 hover:bg-blue-50 rounded-full"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-school-blue focus-ring rounded-md p-1.5 hover:bg-blue-50 transition-all duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-[68px] left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t"
        >
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  cn(
                    "p-3 rounded-md flex items-center justify-between", 
                    isActive 
                      ? "bg-blue-50 text-school-blue font-medium" 
                      : "text-gray-700 hover:bg-blue-50/50 hover:text-school-blue",
                    link.isBold && "font-bold",
                    link.className
                  )
                }
                onClick={closeMenu}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="text-gray-400" />
              </NavLink>
            ))}
            
            <div className="flex items-center justify-center space-x-6 pt-5 border-t border-gray-100 mt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-2.5 text-gray-600 hover:text-school-blue bg-blue-50/50 hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
