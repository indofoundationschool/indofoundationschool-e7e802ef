
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star, Heart, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-school-blue/10 via-school-blue/5 to-white flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-to-br from-school-blue/20 to-school-blue-light/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div className="absolute -bottom-20 -left-20 w-[50%] h-[50%] bg-gradient-to-tr from-school-blue-dark/10 to-school-blue/5 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, -(10 + Math.random() * 20), 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles size={15 + i * 5} className="text-school-blue/60" />
            ) : i % 3 === 1 ? (
              <Star size={15 + i * 5} className="text-school-blue-light/60" />
            ) : (
              <Heart size={15 + i * 5} className="text-school-blue-dark/50" />
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column: Text and buttons */}
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
              <Badge 
                className="bg-gradient-to-r from-school-blue/30 to-school-blue-light/30 text-school-blue-dark border-0 px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1.5 hover:from-school-blue/40 hover:to-school-blue-light/40 backdrop-blur-sm shadow-sm"
              >
                <Sparkles size={14} className="text-school-blue-dark" />
                <span>Welcome to</span>
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-gray-900">Indo Foundation </span>
              <span className="bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent">
                School
              </span>
              <motion.span 
                className="inline-block text-school-blue-dark ml-1"
                animate={{
                  rotateZ: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              >
                <Trophy className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 inline-block" />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <strong className="text-school-blue-dark">Nurturing minds</strong>, <strong>shaping futures</strong>. We provide a <strong className="text-school-blue">holistic educational experience</strong> focused on <strong>academic excellence</strong>, <strong>character development</strong> and <strong className="text-school-blue-dark">temple traditions</strong>.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-school-blue to-school-blue-dark hover:from-school-blue-dark hover:to-school-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <Link to="/about" className="flex items-center space-x-2 relative z-10">
                  <span>Discover More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut" 
                    }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-school-blue text-school-blue hover:bg-school-blue/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                <Link to="/enquire" className="flex items-center space-x-2 relative z-10">
                  <span>Enquire Now</span>
                </Link>
                <span className="absolute inset-0 bg-school-blue/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right column: School image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative background elements */}
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
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-school-blue/20 hover:shadow-xl">
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-transparent"
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
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-school-blue/50 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-school-blue/50 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-school-blue/50 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-school-blue/50 rounded-br-lg"></div>
                  
                  <img 
                    src="/lovable-uploads/cf0780d0-79ac-4bac-952b-c84c3c6d7141.png" 
                    alt="Indo Foundation School Building" 
                    className="w-full h-auto object-contain relative z-10"
                  />
                </div>
              </motion.div>
              
              {/* Decorative floating elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-full p-3 shadow-lg z-20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Trophy size={30} className="text-school-blue" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
