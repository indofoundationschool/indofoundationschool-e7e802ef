
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { motion } from 'framer-motion';

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  const categories = ['all', ...new Set(images.map(img => img.category))];

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-school-blue mb-4">School Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant school life through images showcasing our campus, events, classroom activities, and more.
          </p>
        </motion.div>

        {images.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-500 mb-2">No images in the gallery</p>
            <p className="text-gray-400">Check back soon for updates to our school gallery.</p>
          </div>
        ) : (
          <Tabs defaultValue="all" className="w-full mb-10">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="capitalize px-6"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <GalleryGrid 
                  images={category === 'all' 
                    ? images 
                    : images.filter(img => img.category === category)} 
                />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
