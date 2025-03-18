
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
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
    { icon: Instagram, url: "https://instagram.com", ariaLabel: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", ariaLabel: "Facebook" },
    { icon: Youtube, url: "https://youtube.com", ariaLabel: "YouTube" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png" 
              alt="Indo Foundation School Logo" 
              className="h-14 w-auto mix-blend-multiply transition-transform duration-300 hover:scale-105"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-school-blue">Indo Foundation School</h1>
              <p className="text-xs text-school-blue font-medium animate-pulse">Excellence in Education</p>
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
          <div className="flex space-x-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  cn(
                    "nav-link", 
                    isActive && "active-nav-link",
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
          
          <div className="flex items-center space-x-2 ml-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="p-2 text-gray-600 hover:text-school-blue transition-colors duration-300"
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
            className="text-gray-600 hover:text-school-blue focus-ring rounded-md p-1"
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
          className="md:hidden absolute top-[72px] left-0 right-0 bg-white shadow-lg border-t"
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  cn(
                    "p-2 rounded-md", 
                    isActive ? "bg-school-blue/10 text-school-blue font-medium" : "text-gray-700 hover:bg-gray-100",
                    link.isBold && "font-bold",
                    link.className
                  )
                }
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 mt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-2 text-gray-600 hover:text-school-blue transition-colors duration-300"
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
