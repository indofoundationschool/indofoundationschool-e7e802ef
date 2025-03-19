
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout>
      <div className="relative">
        <div className="fixed inset-0 z-0 opacity-15">
          <img 
            src="/lovable-uploads/21cc8fe2-cd98-4e3b-ad8c-a6e77f82ee16.png" 
            alt="School Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <HeroSection />
          <FeaturesSection />
          <StatsSection />
          <CallToAction />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
