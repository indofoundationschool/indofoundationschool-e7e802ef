
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from '@/components/gallery/Lightbox';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { GalleryImage } from '@/pages/Gallery';

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  if (images.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">No images found in this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover" 
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </AspectRatio>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-medium text-lg line-clamp-1">{image.alt}</h3>
                    {image.description && (
                      <p className="text-white/80 text-sm mt-1 line-clamp-2">{image.description}</p>
                    )}
                  </div>
                  <span className="inline-block px-2 py-1 rounded text-xs bg-white/20 text-white backdrop-blur-sm capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
};

export default GalleryGrid;
