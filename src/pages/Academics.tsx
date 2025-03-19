
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/academics/Hero';
import Programs from '@/components/academics/Programs';
import Curriculum from '@/components/academics/Curriculum';
import Activities from '@/components/academics/Activities';
import Faq from '@/components/academics/Faq';

const Academics = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <Hero />
        <Programs />
        <Curriculum />
        <Activities />
        <Faq />
      </motion.div>
    </Layout>
  );
};

export default Academics;
