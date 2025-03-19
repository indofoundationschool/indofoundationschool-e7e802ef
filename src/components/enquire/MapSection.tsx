
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type MapSectionProps = {
  coordinates: string;
  schoolName: string;
  mapUrl: string;
};

const MapSection: React.FC<MapSectionProps> = ({ coordinates, schoolName, mapUrl }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-school-blue/10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Campus</h2>
            <p className="text-gray-600 mb-6">
              We invite you to visit our campus and experience our facilities firsthand. Our staff will be happy to guide you through our programs and answer any questions you may have.
            </p>
            
            <Button 
              className="mb-8 bg-school-blue hover:bg-school-blue-dark"
              onClick={() => window.open(mapUrl, '_blank')}
            >
              <ExternalLink size={16} className="mr-2" />
              Open in Google Maps
            </Button>
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
            <iframe 
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.979124046534!2d76.58225367636772!3d28.883147275349302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d86073f8fc095%3A0x4a0d12fe3d8f6bd8!2sIndo%20Foundation%20School!5e0!3m2!1sen!2sin!4v1698500645781!5m2!1sen!2sin`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Indo Foundation School Location"
              className="absolute inset-0"
            ></iframe>
          </div>
          
          <div className="mt-6 text-center text-gray-600">
            <p className="font-medium">Indo Foundation School</p>
            <p>Plot No 42/8, Shivaji Colony Rohtak, Haryana 124001</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
