
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Import the refactored components
import Logo from './navbar/Logo';
import DesktopNavLinks from './navbar/DesktopNavLinks';
import MobileMenu from './navbar/MobileMenu';
import SocialLinks from './navbar/SocialLinks';

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <AnimatePresence>
      <motion.nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-10 transition-all duration-500 w-full",
          scrolled 
            ? "bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 backdrop-blur-lg shadow-md" 
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Component */}
          <Logo />

          {/* Desktop Navigation Links & Social Links */}
          <div className="hidden md:flex items-center">
            <DesktopNavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu */}
          <MobileMenu 
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
          />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
