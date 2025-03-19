
import { NavLink } from 'react-router-dom';
import { BookOpen, Home, Users, Image, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navLinks } from './navData';

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

const DesktopNavLinks = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="hidden md:flex items-center space-x-2"
    >
      <div className="flex space-x-1">
        {navLinks.map((link, index) => {
          const IconComponent = getIconForPath(link.path);
          
          return (
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
                    "relative px-4 py-2 rounded-full text-gray-700 hover:text-school-blue transition-all duration-300 ease-in-out overflow-hidden flex items-center",
                    isActive ? "text-school-blue font-medium bg-blue-50/80" : "",
                    link.highlight ? "bg-gradient-to-r from-school-blue to-school-blue-dark text-white hover:text-white shadow-sm hover:shadow-md" : "",
                    link.isBold && "font-bold",
                    link.className
                  )
                }
              >
                {({ isActive }) => (
                  <span className="relative z-10 flex items-center gap-1.5">
                    {IconComponent && <IconComponent size={16} className={cn("inline", isActive && !link.highlight ? "text-school-blue" : link.highlight ? "text-white" : "text-gray-500")} />}
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
          );
        })}
      </div>
    </motion.div>
  );
};

export default DesktopNavLinks;
