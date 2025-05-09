
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/academics/Hero';
import Programs from '@/components/academics/Programs';
import Curriculum from '@/components/academics/Curriculum';
import Activities from '@/components/academics/Activities';
import Faq from '@/components/academics/Faq';

const Academics = () => {
  // Structured data for the academics page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Indo Foundation School Academic Programs",
    "description": "Comprehensive academic programs and curriculum at Indo Foundation School focusing on holistic development and excellence in education.",
    "provider": {
      "@type": "Organization",
      "name": "Indo Foundation School",
      "sameAs": "https://www.indofoundationschool.com"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Primary Education",
        "description": "Foundation education for young learners focusing on core skills and character development"
      },
      {
        "@type": "CourseInstance",
        "name": "Secondary Education",
        "description": "Comprehensive middle and high school education following CBSE curriculum"
      },
      {
        "@type": "CourseInstance",
        "name": "Senior Secondary",
        "description": "Specialized education for grades 11-12 preparing students for higher education and careers"
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Academic Programs & Curriculum | Indo Foundation School Rohtak</title>
        <meta name="description" content="Explore Indo Foundation School's comprehensive academic programs, CBSE-aligned curriculum, extracurricular activities, and teaching methodology designed for all-round student development." />
        <meta name="keywords" content="Indo Foundation School academics, CBSE curriculum Rohtak, school programs, extracurricular activities, primary education, secondary education, senior secondary education, holistic learning, Rohtak education" />
        <link rel="canonical" href="https://www.indofoundationschool.com/academics" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indofoundationschool.com/academics" />
        <meta property="og:title" content="Academic Programs & Curriculum | Indo Foundation School Rohtak" />
        <meta property="og:description" content="Explore our comprehensive academic programs, CBSE-aligned curriculum, and extracurricular activities designed for holistic student development." />
        <meta property="og:image" content="https://www.indofoundationschool.com/lovable-uploads/d80d2fa3-0494-48a8-865e-5f224454dd59.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.indofoundationschool.com/academics" />
        <meta name="twitter:title" content="Academic Programs & Curriculum | Indo Foundation School" />
        <meta name="twitter:description" content="Explore our comprehensive academic programs, curriculum, and extracurricular activities designed for holistic student development." />
        <meta name="twitter:image" content="https://www.indofoundationschool.com/lovable-uploads/d80d2fa3-0494-48a8-865e-5f224454dd59.png" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
