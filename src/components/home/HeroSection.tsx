
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-school-blue/5 to-white flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-school-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-school-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-school-blue/10 text-school-blue px-4 py-1 rounded-full text-sm font-medium">Welcome to</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Indo Foundation <span className="text-school-blue">School</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <strong>Nurturing minds</strong>, <strong>shaping futures</strong>. We provide a <strong>holistic educational experience</strong> focused on <strong>academic excellence</strong>, <strong>character development</strong> and <strong>temple traditions</strong>.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="lg" className="bg-school-blue hover:bg-school-blue-dark text-white rounded-full">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Discover More</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-school-blue text-school-blue hover:bg-school-blue/10 rounded-full">
                <Link to="/enquire" className="flex items-center space-x-2">
                  <span>Enquire Now</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -z-10 inset-0 bg-school-blue/20 rounded-full blur-3xl transform scale-75 translate-x-10 translate-y-10"></div>
              <img 
                src="/lovable-uploads/cf0780d0-79ac-4bac-952b-c84c3c6d7141.png" 
                alt="Indo Foundation School Building" 
                className="w-full h-auto object-contain rounded-xl shadow-xl relative z-10 animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
