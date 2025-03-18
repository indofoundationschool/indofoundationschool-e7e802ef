
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-school-blue/5 to-white flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-school-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-school-blue/5 rounded-full blur-3xl"></div>
        <motion.div 
          className="absolute top-40 right-1/4"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }} 
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Sparkles size={30} className="text-school-blue/60" />
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-1/3"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }} 
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Sparkles size={20} className="text-school-blue-dark/40" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
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
              <span className="bg-gradient-to-r from-school-blue/20 to-school-blue-light/20 text-school-blue px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5">
                <Sparkles size={14} className="text-school-blue-dark" />
                <span>Welcome to</span>
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-gray-900">Indo Foundation </span>
              <span className="bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent">School</span>
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-school-blue to-school-blue-dark hover:from-school-blue-dark hover:to-school-blue text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Discover More</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-school-blue text-school-blue hover:bg-school-blue/10 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
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
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-school-blue/30 to-school-blue-light/20 rounded-full blur-3xl transform scale-75 translate-x-10 translate-y-10"></div>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white/80 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  />
                  <img 
                    src="/lovable-uploads/cf0780d0-79ac-4bac-952b-c84c3c6d7141.png" 
                    alt="Indo Foundation School Building" 
                    className="w-full h-auto object-contain relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
