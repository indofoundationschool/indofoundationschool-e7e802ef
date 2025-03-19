
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryGrid from '@/components/gallery/GalleryGrid';
import UploadSection from '@/components/gallery/UploadSection';
import { motion } from 'framer-motion';

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: '1',
      src: '/lovable-uploads/aaea342f-f63d-499a-a90e-1e2ff9787dd2.png',
      alt: 'Awards Ceremony - Group 1',
      category: 'events',
      description: 'Students receiving achievement certificates during the annual awards ceremony.'
    },
    {
      id: '2',
      src: '/lovable-uploads/a16ec3c6-ee03-4c7a-8695-2e23333c7bf5.png',
      alt: 'Awards Ceremony - Group 2',
      category: 'events',
      description: 'Another group of students proudly displaying their achievement certificates.'
    },
    {
      id: '3',
      src: '/lovable-uploads/aa8ed1bc-781f-4733-9f8b-4dc8e6c4c2cc.png',
      alt: 'Natural Environment',
      category: 'campus',
      description: 'Students and teachers enjoying our school\'s natural and friendly environment.'
    },
    {
      id: '4',
      src: '/lovable-uploads/e1e00e14-8566-4dd9-bc82-b96ea8692097.png',
      alt: 'Cultural Program',
      category: 'events',
      description: 'Students and teachers during a special cultural program at the school.'
    },
    {
      id: '5',
      src: '/lovable-uploads/824368d2-a149-46b3-8505-abd6d3f5b0b5.png',
      alt: 'Sports Medal Winners',
      category: 'sports',
      description: 'Students and teachers with medals won during the school sports day.'
    },
    {
      id: '6',
      src: '/lovable-uploads/beb41daf-08a9-484e-922a-10804c40d2b5.png',
      alt: 'Sports Medal Winners',
      category: 'sports',
      description: 'Students with medals received during the inter-school sports competition.'
    },
    {
      id: '7',
      src: '/lovable-uploads/d4a120f0-8b39-4f13-b850-c2c7bf0dccc6.png',
      alt: 'Cultural Dance Performance',
      category: 'events',
      description: 'Students dressed in traditional attire for a cultural dance performance.'
    }
  ]);

  const handleImageUpload = (newImage: GalleryImage) => {
    setImages(prevImages => [...prevImages, newImage]);
  };

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

        <UploadSection onImageUpload={handleImageUpload} />
      </div>
    </Layout>
  );
};

export default Gallery;
