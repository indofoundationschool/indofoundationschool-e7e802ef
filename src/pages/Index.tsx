
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Indo Foundation School - Excellence in Education</title>
        <meta name="description" content="Indo Foundation School provides quality education with a focus on academic excellence, personal growth, and holistic development in a nurturing environment." />
        <meta name="keywords" content="school, education, Indo Foundation School, academics, learning, holistic education" />
        <link rel="canonical" href="https://www.indofoundationschool.com" />
        <meta property="og:title" content="Indo Foundation School - Excellence in Education" />
        <meta property="og:description" content="Excellence in Education - Nurturing minds, building futures through quality education and holistic development." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indo Foundation School - Home" />
        <meta name="twitter:description" content="Excellence in Education - Nurturing minds, building futures through quality education and holistic development." />
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
