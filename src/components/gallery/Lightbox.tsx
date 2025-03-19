
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '@/pages/Gallery';
import { Button } from '@/components/ui/button';

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
}

export const Lightbox = ({ image, onClose }: LightboxProps) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `${image.alt.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <Button
              onClick={handleDownload}
              size="icon"
              variant="secondary"
              className="rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            >
              <Download size={20} />
            </Button>
            <Button
              onClick={onClose}
              size="icon"
              variant="secondary"
              className="rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </Button>
          </div>
          
          <div className="h-full w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 text-white">
            <h3 className="text-xl font-medium">{image.alt}</h3>
            {image.description && (
              <p className="mt-1 text-white/80">{image.description}</p>
            )}
            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs rounded bg-white/20 capitalize">
                {image.category}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
