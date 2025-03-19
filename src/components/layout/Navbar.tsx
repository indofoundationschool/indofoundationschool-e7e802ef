
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Enquire', path: '/enquire', isBold: true, highlight: true },
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/indofoundationschool?igsh=czV4OXd6dXVkb3Vi&utm_source=qr", ariaLabel: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", ariaLabel: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/@indofoundationschool", ariaLabel: "YouTube" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-10 transition-all duration-500 w-full",
        scrolled 
          ? "bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md shadow-md" 
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
            <div className="overflow-hidden rounded-full bg-gradient-to-br from-blue-200 via-blue-50 to-white p-1.5 shadow-md group-hover:shadow-lg transition-all duration-300 border border-blue-100 group-hover:border-blue-200">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png" 
                  alt="Indo Foundation School Logo" 
                  className="h-12 w-12 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute -top-1 -right-1"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={14} className="text-school-blue fill-school-blue-light/50" />
                </motion.div>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent transition-all duration-300 group-hover:from-school-blue-dark group-hover:to-school-blue">Indo Foundation School</h1>
              <p className="text-xs text-black/80 group-hover:text-school-blue transition-colors duration-300">Excellence in Education</p>
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
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    cn(
                      "relative px-4 py-2 rounded-full text-gray-700 hover:text-school-blue transition-all duration-300 ease-in-out overflow-hidden",
                      isActive ? "text-school-blue font-medium bg-blue-50/80" : "",
                      link.highlight ? "bg-gradient-to-r from-school-blue to-school-blue-dark text-white hover:text-white shadow-sm hover:shadow-md" : "",
                      link.isBold && "font-bold",
                      link.className
                    )
                  }
                  onClick={closeMenu}
                >
                  {({ isActive }) => (
                    <span className="relative z-10 flex items-center gap-1">
                      {link.path === '/academics' && <BookOpen size={16} className="inline" />}
                      {link.name}
                      {isActive && !link.highlight && (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-school-blue w-full"
                          layoutId="underline"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="p-2 text-gray-600 hover:text-white hover:bg-school-blue rounded-full transition-all duration-300 hover:shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-school-blue focus-ring rounded-full p-2.5 hover:bg-blue-50 transition-all duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[68px] left-0 right-0 bg-gradient-to-b from-white/95 to-blue-50/95 backdrop-blur-md shadow-lg border-t border-blue-100"
          >
            <div className="flex flex-col p-5 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      cn(
                        "p-3 rounded-lg flex items-center justify-between", 
                        isActive 
                          ? "bg-blue-50 text-school-blue font-medium" 
                          : link.highlight
                            ? "bg-gradient-to-r from-school-blue to-school-blue-dark text-white"
                            : "text-gray-700 hover:bg-blue-50/50 hover:text-school-blue",
                        link.isBold && "font-bold",
                        link.className,
                        "transition-all duration-300 hover:shadow-sm"
                      )
                    }
                    onClick={closeMenu}
                  >
                    <span className="flex items-center gap-2">
                      {link.path === '/academics' && <BookOpen size={16} />}
                      {link.name}
                    </span>
                    <ChevronRight size={16} className={link.highlight ? "text-white" : "text-gray-400"} />
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div 
                className="flex items-center justify-center space-x-6 pt-5 border-t border-blue-100 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="p-3 text-gray-600 hover:text-white bg-blue-50/80 hover:bg-school-blue rounded-full transition-all duration-300 hover:shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
