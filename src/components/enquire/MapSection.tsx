
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Map, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

type MapSectionProps = {
  coordinates: string;
  schoolName: string;
  mapUrl: string;
};

const MapSection: React.FC<MapSectionProps> = ({ coordinates, schoolName, mapUrl }) => {
  // Convert DMS coordinates to decimal for embedding
  // The coordinates 28°52'59.3"N 76°35'05.4"E in decimal are approximately:
  // 28.883139, 76.584833
  const decimalCoordinates = "28.883139,76.584833";
  
  // Direct Google Maps URL with the exact coordinates
  const exactMapUrl = `https://www.google.com/maps?q=${decimalCoordinates}&z=18`;
  
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
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                className="bg-school-blue hover:bg-school-blue-dark"
                onClick={() => window.open(exactMapUrl, '_blank')}
              >
                <Map size={16} className="mr-2" />
                View Exact Location
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${decimalCoordinates}`, '_blank')}
              >
                <Navigation size={16} className="mr-2" />
                Get Directions
              </Button>
            </div>
            
            <div className="max-w-md mx-auto border border-school-blue/20 rounded-lg p-3 mb-6 bg-school-blue/5">
              <p className="font-medium text-gray-800">
                Indo Foundation School
              </p>
              <p className="text-gray-600 mb-2">
                Plot No 42/8, Shivaji Colony Rohtak-124001 Haryana
              </p>
              <p className="text-sm text-school-blue font-medium">
                Coordinates: 28°52'59.3"N 76°35'05.4"E
              </p>
            </div>
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
            <iframe 
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d76.584833!3d28.883139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDUyJzU5LjMiTiA3NsKwMzUnMDUuNCJF!5e0!3m2!1sen!2sin!4v1698500645781!5m2!1sen!2sin`}
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
