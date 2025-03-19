
import { NavLink } from 'react-router-dom';
import { ChevronRight, BookOpen, Menu, X, Home, Users, Image, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navLinks } from './navData';
import SocialLinks from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const getIconForPath = (path: string) => {
  switch (path) {
    case '/':
      return Home;
    case '/about':
      return Users;
    case '/academics':
      return BookOpen;
    case '/gallery':
      return Image;
    case '/enquire':
      return MessageSquare;
    default:
      return null;
  }
};

const MobileMenu = ({ isOpen, toggleMenu, closeMenu }: MobileMenuProps) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <motion.button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-school-blue focus-ring rounded-full p-2.5 hover:bg-blue-50 transition-all duration-300 relative overflow-hidden group"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            initial={false}
            animate={isOpen ? { scale: 100 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
          />
          {isOpen ? (
            <X size={24} className="relative z-10" />
          ) : (
            <Menu size={24} className="relative z-10" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[68px] left-0 right-0 bg-gradient-to-b from-white/95 via-blue-50/95 to-white/95 backdrop-blur-lg shadow-lg border-t border-blue-100"
          >
            <div className="flex flex-col p-5 space-y-3">
              {navLinks.map((link, index) => {
                const IconComponent = getIconForPath(link.path);
                
                return (
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
                            ? "bg-blue-50 text-school-blue font-medium border-l-4 border-school-blue" 
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
                      <span className="flex items-center gap-3">
                        {IconComponent && (
                          <span className={cn(
                            "p-2 rounded-full flex items-center justify-center",
                            link.highlight ? "bg-white/20" : "bg-blue-100/50"
                          )}>
                            <IconComponent size={18} className={link.highlight ? "text-white" : ""} />
                          </span>
                        )}
                        {link.name}
                      </span>
                      <ChevronRight size={16} className={link.highlight ? "text-white" : "text-gray-400"} />
                    </NavLink>
                  </motion.div>
                );
              })}
              
              <SocialLinks isMobile={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
