
import { NavLink } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navLinks } from './navData';

const DesktopNavLinks = () => {
  return (
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
      
    </motion.div>
  );
};

export default DesktopNavLinks;
