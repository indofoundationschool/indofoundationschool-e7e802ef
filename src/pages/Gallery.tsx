
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import UploadSection from '@/components/gallery/UploadSection';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
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
      src: '/lovable-uploads/764e3d8d-e8b6-4acb-ac3a-4782cff6076a.png',
      alt: 'Foundation Day Cultural Program',
      category: 'events',
      description: 'Students performing in traditional attire during the school foundation day celebrations.'
    },
    {
      id: '4',
      src: '/lovable-uploads/d0665058-ed0f-4ffe-b8a0-3aa06fb48e3a.png',
      alt: '47th Foundation Day Celebration',
      category: 'events',
      description: 'Students in colorful traditional attire performing during the 47th Foundation Day celebrations.'
    },
    {
      id: '5',
      src: '/lovable-uploads/IMG_4943.jpeg',
      alt: 'School Assembly Session',
      category: 'school',
      description: 'Students gathered for the morning assembly session on the school grounds.'
    },
    {
      id: '6',
      src: '/lovable-uploads/8d6715e0-c260-4542-8ab6-4d9eac1a4045.png',
      alt: 'Quiz Competition Participation',
      category: 'school',
      description: 'Students in uniforms sitting together before or after participating in a quiz or similar school competition.'
    }
  ];

  const [images, setImages] = useState<GalleryImage[]>(initialImages);

  // Simulate loading state and show toast when gallery is loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast.success('Gallery loaded successfully!');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-school-blue"></div>
          </div>
        ) : (
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
        )}

        <UploadSection onImageUpload={handleImageUpload} />
      </div>
    </Layout>
  );
};

export default Gallery;
