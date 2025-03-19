
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import UploadSection from '@/components/gallery/UploadSection';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const initialImages: GalleryImage[] = [
    {
      id: '1',
      src: '/lovable-uploads/caefd431-3e9a-4b95-9c75-0c029111b4c7.png',
      alt: 'Academic Achievement Awards',
      category: 'academics',
      description: 'Students proudly displaying their academic achievement certificates with their teacher.'
    },
    {
      id: '2',
      src: '/lovable-uploads/73bb71c5-ccf7-4f48-af95-da62530b6bc1.png',
      alt: 'Sports Day Winners',
      category: 'sports',
      description: 'Winners of the annual sports competition with their trophies and medals.'
    },
    {
      id: '3',
      src: '/lovable-uploads/483cbb0d-6c27-44f6-bf55-e88913bbe6bd.png',
      alt: 'Yoga Session',
      category: 'activities',
      description: 'Students participating in a yoga and physical wellness session at school.'
    }
  ];

  const [images, setImages] = useState<GalleryImage[]>(initialImages);

  const handleImageUpload = (newImage: GalleryImage) => {
    setImages(prevImages => [...prevImages, newImage]);
  };

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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

        <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="mb-8">
          <div className="flex justify-center">
            <TabsList className="bg-blue-50/50 p-1 mb-6">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize data-[state=active]:bg-school-blue data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <GalleryGrid 
                images={filteredImages}
              />
            </TabsContent>
          ))}
        </Tabs>

        <UploadSection onImageUpload={handleImageUpload} />
      </div>
    </Layout>
  );
};

export default Gallery;
