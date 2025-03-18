
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
      src: '/lovable-uploads/d2958176-f72d-486f-b3fa-0e06d1b426da.png',
      alt: 'School Logo',
      category: 'school',
      description: 'Indo Foundation School Logo'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070',
      alt: 'School Building',
      category: 'campus',
      description: 'Our beautiful campus building'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022',
      alt: 'Students in classroom',
      category: 'classroom',
      description: 'Students engaged in learning activities'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070',
      alt: 'Sport activities',
      category: 'sports',
      description: 'Students participating in sports activities'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?q=80&w=1974',
      alt: 'Cultural Program',
      category: 'events',
      description: 'Annual cultural program celebration'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      alt: 'School Building - Blue',
      category: 'school',
      description: 'Modern blue school building with multiple floors'
    },
    {
      id: '7',
      src: '/lovable-uploads/69a3cea7-8108-443f-83b9-62076db99b4e.png',
      alt: 'Students in playground',
      category: 'activities',
      description: 'Students enjoying recreation time in the school playground'
    }
  ]);

  const categories = ['all', ...new Set(images.map(img => img.category))];

  const addNewImage = (newImage: GalleryImage) => {
    setImages(prev => [...prev, { ...newImage, id: Date.now().toString() }]);
  };

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

        <UploadSection onImageUpload={addNewImage} />
      </div>
    </Layout>
  );
};

export default Gallery;
