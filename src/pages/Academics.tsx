
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Academics - Indo Foundation School</title>
        <meta name="description" content="Explore our academic programs, curriculum, and extracurricular activities that provide a balanced approach to education and personality development." />
        <meta name="keywords" content="school academics, curriculum, educational programs, extracurricular activities, learning approach" />
        <link rel="canonical" href="https://www.indofoundationschool.com/academics" />
        <meta property="og:title" content="Academics at Indo Foundation School" />
        <meta property="og:description" content="Explore our academic programs, curriculum, and extracurricular activities that provide a balanced approach to education." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Academics at Indo Foundation School" />
        <meta name="twitter:description" content="Explore our academic programs, curriculum, and extracurricular activities that provide a balanced approach to education." />
      </Helmet>
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
