
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star, Heart, Trophy, BookOpen, GraduationCap, Sun } from 'lucide-react';
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
    <section className="relative min-h-screen bg-gradient-to-b from-school-blue/20 via-school-blue/10 to-white flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-br from-school-blue/30 to-school-blue-light/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x / 40}px, ${mousePosition.y / 40}px)`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.8, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[60%] h-[60%] bg-gradient-to-tr from-school-blue-dark/20 to-school-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        
        {/* Floating elements */}
        {[...Array(8)].map((_, i) => {
          const icons = [
            <Sparkles key={`sparkle-${i}`} size={15 + i * 5} className="text-school-blue/70" />,
            <Star key={`star-${i}`} size={15 + i * 5} className="text-school-blue-light/70" />,
            <Heart key={`heart-${i}`} size={15 + i * 5} className="text-school-blue-dark/60" />,
            <BookOpen key={`book-${i}`} size={15 + i * 5} className="text-school-blue/70" />,
            <GraduationCap key={`cap-${i}`} size={15 + i * 5} className="text-school-blue-dark/60" />,
            <Sun key={`sun-${i}`} size={15 + i * 5} className="text-school-blue-light/70" />
          ];

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
              animate={{
                y: [0, -(10 + Math.random() * 30), 0],
                x: [0, (Math.random() * 20 - 10), 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 3,
              }}
            >
              {icons[i % icons.length]}
            </motion.div>
          );
        })}
      </div>
      
      <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text and buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Badge 
                className="bg-gradient-to-r from-school-blue-dark/50 to-school-blue/50 text-white border-0 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1.5 hover:from-school-blue-dark/60 hover:to-school-blue/60 backdrop-blur-sm shadow-md"
              >
                <Sparkles size={16} className="text-white" />
                <span>Nurturing Future Leaders</span>
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
                  rotateZ: [0, 15, 0, -15, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
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
                className="bg-gradient-to-r from-school-blue to-school-blue-dark hover:from-school-blue-dark hover:to-school-blue text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-white/20"
              >
                <Link to="/about" className="flex items-center space-x-2 relative z-10 py-1">
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
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-school-blue text-school-blue hover:bg-school-blue/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <Link to="/enquire" className="flex items-center space-x-2 relative z-10 py-1">
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
            <div className="relative w-full max-w-lg">
              {/* Decorative background elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-school-blue/40 to-school-blue-light/30 rounded-full blur-3xl transform scale-90 translate-x-10 translate-y-10"></div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 transition-all duration-500 hover:scale-[1.03] hover:shadow-school-blue/30 hover:shadow-2xl">
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-school-blue/60 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-school-blue/60 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-school-blue/60 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-school-blue/60 rounded-br-lg"></div>
                  
                  <img 
                    src="/lovable-uploads/cf0780d0-79ac-4bac-952b-c84c3c6d7141.png" 
                    alt="Indo Foundation School Building" 
                    className="w-full h-auto object-contain relative z-10"
                  />
                </div>
              </motion.div>
              
              {/* Decorative floating elements */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-white rounded-full p-4 shadow-xl z-20 border-2 border-school-blue/20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 8, 0, -8, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Trophy size={38} className="text-school-blue" />
              </motion.div>
              
              <motion.div
                className="absolute top-10 -left-10 bg-white rounded-full p-3 shadow-lg z-20 border-2 border-school-blue-light/20"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <GraduationCap size={28} className="text-school-blue-light" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
