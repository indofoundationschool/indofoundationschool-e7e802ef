
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GalleryImage } from '@/pages/Gallery';
import { toast } from 'sonner';

interface UploadSectionProps {
  onImageUpload: (image: GalleryImage) => void;
}

const UploadSection = ({ onImageUpload }: UploadSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [category, setCategory] = useState('');
  const [alt, setAlt] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setCategory('');
    setAlt('');
    setDescription('');
    setIsUploading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !category || !alt) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsUploading(true);

    // Since this is a simulation and we're not using a real backend,
    // we'll just use the local preview URL as the image source
    setTimeout(() => {
      const newImage: GalleryImage = {
        id: Date.now().toString(),
        src: previewUrl as string,
        alt,
        category,
        description: description || undefined,
      };
      
      onImageUpload(newImage);
      resetForm();
      setIsExpanded(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-16 w-full max-w-3xl mx-auto"
    >
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        variant="outline"
        className="w-full py-6 flex items-center justify-center gap-2 border-dashed border-2"
      >
        <Upload size={20} />
        {isExpanded ? 'Cancel Upload' : 'Upload New Image'}
      </Button>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mt-4"
        >
          <Card>
            <CardHeader>
              <CardTitle>Upload a new image</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="image-upload">Image</Label>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 w-full flex flex-col items-center justify-center">
                        {previewUrl ? (
                          <div className="relative w-full">
                            <img
                              src={previewUrl}
                              alt="Preview"
                              className="mx-auto max-h-[200px] object-contain rounded"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setImageFile(null);
                                setPreviewUrl(null);
                              }}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <>
                            <Upload className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB</p>
                          </>
                        )}
                        <Input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className={previewUrl ? "hidden" : "opacity-0 absolute inset-0 cursor-pointer"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={category} onValueChange={(value) => setCategory(value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academics">Academics</SelectItem>
                          <SelectItem value="campus">Campus</SelectItem>
                          <SelectItem value="classroom">Classroom</SelectItem>
                          <SelectItem value="events">Events</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="activities">Activities</SelectItem>
                          <SelectItem value="school">School</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alt-text">Image Title</Label>
                      <Input
                        id="alt-text"
                        value={alt}
                        onChange={(e) => setAlt(e.target.value)}
                        placeholder="Brief title of the image"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Input
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Add a short description of the image"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <Button type="button" variant="outline" onClick={() => setIsExpanded(false)}>
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={!imageFile || !category || !alt || isUploading}
                    className="gap-2"
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Check size={16} />
                        Upload Image
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UploadSection;
