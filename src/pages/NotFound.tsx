
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | Indo Foundation School</title>
        <meta name="description" content="The page you are looking for does not exist. Please navigate back to the Indo Foundation School homepage to find what you're looking for." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.indofoundationschool.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.indofoundationschool.com${location.pathname}`} />
        <meta property="og:title" content="Page Not Found | Indo Foundation School" />
        <meta property="og:description" content="The page you are looking for does not exist. Please navigate back to the Indo Foundation School homepage." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`https://www.indofoundationschool.com${location.pathname}`} />
        <meta name="twitter:title" content="Page Not Found | Indo Foundation School" />
        <meta name="twitter:description" content="The page you are looking for does not exist. Please navigate back to the Indo Foundation School homepage." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-school-blue/5 to-white px-6">
        <div className="text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold text-school-blue mb-6">404</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
            </p>
            
            <Button className="bg-school-blue hover:bg-school-blue-dark text-white">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Return to Home</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
