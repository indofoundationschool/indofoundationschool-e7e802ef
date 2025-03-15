import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { name: 'Campus', id: 'campus' },
    { name: 'Classrooms', id: 'classrooms' },
    { name: 'Events', id: 'events' },
    { name: 'Activities', id: 'activities' },
  ];

  const images = [
    {
      src: '/lovable-uploads/cf0780d0-79ac-4bac-952b-c84c3c6d7141.png',
      alt: 'Indo Foundation School Building',
      category: 'campus',
    },
    {
      src: '/lovable-uploads/f8d9d0d5-c3c1-4fe9-83f8-f4a655ace3c7.png',
      alt: 'School Building Entrance',
      category: 'campus',
    },
    {
      src: 'https://images.unsplash.com/photo-1576495169018-bd2414046c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'School Campus',
      category: 'campus',
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      alt: 'Primary Classroom',
      category: 'classrooms',
    },
    {
      src: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      alt: 'Computer Lab',
      category: 'classrooms',
    },
    {
      src: 'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Annual School Function',
      category: 'events',
    },
    {
      src: 'https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Cultural Day Celebration',
      category: 'events',
    },
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Sports Day',
      category: 'activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGRyZW4lMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'Art Class',
      category: 'activities',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout>
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-school-blue/5 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-school-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-school-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
            <p className="text-lg text-gray-600">Visual highlights of our campus, classrooms, events, and activities</p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center mb-10 flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-school-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-school-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-medium">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
