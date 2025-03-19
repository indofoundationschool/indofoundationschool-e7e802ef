
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
    </nav>
  );
};

export default Navbar;
