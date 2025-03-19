
import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <NavLink to="/" className="flex items-center space-x-3 group">
        <div className="overflow-hidden rounded-full bg-gradient-to-br from-blue-200 via-blue-50 to-white p-1.5 shadow-md group-hover:shadow-lg transition-all duration-300 border border-blue-100 group-hover:border-blue-200">
          <div className="relative">
            <motion.img 
              src="/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png" 
              alt="Indo Foundation School Logo" 
              className="h-12 w-12 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: 5 }}
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
          <motion.p 
            className="text-xs text-black/80 group-hover:text-school-blue transition-colors duration-300"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >Excellence in Education</motion.p>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default Logo;
