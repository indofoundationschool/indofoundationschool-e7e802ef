
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-school-blue/20 via-blue-50/50 to-white"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-school-blue-light/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Sparkles size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 text-school-blue/30"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <Star size={50} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-blue-100">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Join Our <span className="bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent">School Community</span>?
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Take the first step towards providing your child with an <strong>exceptional educational experience</strong>. Contact us today to learn more or schedule a visit to our campus.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-school-blue to-school-blue-dark hover:from-school-blue-dark hover:to-school-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6"
              >
                <Link to="/enquire" className="flex items-center space-x-2">
                  <span className="text-base">Enquire Now</span>
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
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-school-blue text-school-blue hover:bg-school-blue/10 rounded-full transition-all duration-300 px-8 py-6"
              >
                <Link to="/about" className="flex items-center space-x-2">
                  <span className="text-base">Learn More</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
