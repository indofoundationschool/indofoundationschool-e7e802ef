
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-school-blue/40 to-white/90 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('/lovable-uploads/db8487fa-d890-4244-9872-a9bbabd534d8.png')] bg-cover bg-center"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-school-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-school-blue/5 rounded-full blur-3xl"></div>
        
        <motion.div 
          className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full bg-amber-400/30 backdrop-blur-sm"
          animate={{ 
            y: [0, -15, 0], 
            x: [0, 10, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-purple-400/30 backdrop-blur-sm"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -15, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full bg-emerald-400/30 backdrop-blur-sm"
          animate={{ 
            y: [0, -25, 0], 
            x: [0, -10, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-school-blue-dark via-school-blue to-school-blue-light">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Discover our comprehensive approach to education that nurtures intellectual curiosity, 
            critical thinking, and a lifelong passion for learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-school-blue hover:bg-school-blue-dark transition-all duration-300 gap-2 shadow-lg hover:shadow-xl"
            >
              Explore Programs <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
