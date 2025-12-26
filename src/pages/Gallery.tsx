
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import UploadSection from '@/components/gallery/UploadSection';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Image } from 'lucide-react';

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
      src: '/lovable-uploads/main_logo.jpg',
      alt: 'Academic Achievement Awards',
      category: 'academics',
      description: 'Students proudly displaying their academic achievement certificates with their teacher.'
    },
    {
      id: '2',
      src: '/lovable-uploads/sports_day_winner.png',
      alt: 'Sports Day Winners',
      category: 'sports',
      description: 'Winners of the annual sports competition with their trophies and medals.'
    },
    {
      id: '3',
      src: '/lovable-uploads/sports_day.png',
      alt: 'Foundation Day Cultural Program',
      category: 'events',
      description: 'Students performing in traditional attire during the school foundation day celebrations.'
    },
    {
      id: '4',
      src: '/lovable-uploads/foundation_day_cel.png',
      alt: '47th Foundation Day Celebration',
      category: 'events',
      description: 'Students in colorful traditional attire performing during the 47th Foundation Day celebrations.'
    },
    {
      id: '5',
      src: '/lovable-uploads/classroom.png',
      alt: 'School Assembly Session',
      category: 'school',
      description: 'Students gathered for the morning assembly session on the school grounds.'
    },
    {
      id: '6',
      src: '/lovable-uploads/quiz_comp.png',
      alt: 'Quiz Competition Participation',
      category: 'school',
      description: 'Students in uniforms sitting together before or after participating in a quiz or similar school competition.'
    },
    {
      id: '7',
      src: '/lovable-uploads/smart_class.jpg',
      alt: 'School Error Image',
      category: 'school',
      description: 'Screenshot showing 404 error page from the school website.'
    }
  ];

  const [images, setImages] = useState<GalleryImage[]>(initialImages);

  // Load gallery and show toast when gallery is loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast.success('Gallery loaded successfully!');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // const handleImageUpload = (newImage: GalleryImage) => {
  //   console.log("New image received:", newImage);
  //   // Add new image to the images array
  //   setImages(prevImages => [newImage, ...prevImages]);
  //   // Show a success toast
  //   toast.success('Image uploaded successfully!');
  // };

  // Extract unique categories from images
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
          <>
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
              
              <TabsContent value={selectedCategory}>
                {filteredImages.length > 0 ? (
                  <GalleryGrid images={filteredImages} />
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                    <Image className="w-16 h-16 mb-4 text-gray-300" />
                    <p>No images found in this category.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* <UploadSection onImageUpload={handleImageUpload} /> */}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
