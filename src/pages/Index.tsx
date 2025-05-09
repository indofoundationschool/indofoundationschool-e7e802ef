
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  // Structured data for the school (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Indo Foundation School",
    "description": "Indo Foundation School provides quality education with a focus on academic excellence, personal growth, and holistic development in a nurturing environment.",
    "url": "https://www.indofoundationschool.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No 42/8, Shivaji Colony",
      "addressLocality": "Rohtak",
      "addressRegion": "Haryana",
      "postalCode": "124001",
      "addressCountry": "IN"
    },
    "telephone": "+919896110054",
    "email": "indofoundationschool@gmail.com"
  };

  return (
    <Layout>
      <Helmet>
        <title>Indo Foundation School Rohtak | Excellence in Education Since 1995</title>
        <meta name="description" content="Indo Foundation School in Rohtak provides exceptional education with a focus on academic excellence, personal growth, and holistic development in a nurturing environment." />
        <meta name="keywords" content="Indo Foundation School, best school in Rohtak, education in Haryana, CBSE schools, academic excellence, holistic education, school admission, Shivaji Colony Rohtak" />
        <link rel="canonical" href="https://www.indofoundationschool.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indofoundationschool.com" />
        <meta property="og:title" content="Indo Foundation School - Excellence in Education Since 1995" />
        <meta property="og:description" content="Excellence in Education - Nurturing minds, building futures through quality education and holistic development at Indo Foundation School, Rohtak." />
        <meta property="og:image" content="https://www.indofoundationschool.com/lovable-uploads/d80d2fa3-0494-48a8-865e-5f224454dd59.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.indofoundationschool.com" />
        <meta name="twitter:title" content="Indo Foundation School - Excellence in Education" />
        <meta name="twitter:description" content="Excellence in Education - Nurturing minds, building futures through quality education and holistic development at Indo Foundation School, Rohtak." />
        <meta name="twitter:image" content="https://www.indofoundationschool.com/lovable-uploads/d80d2fa3-0494-48a8-865e-5f224454dd59.png" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
