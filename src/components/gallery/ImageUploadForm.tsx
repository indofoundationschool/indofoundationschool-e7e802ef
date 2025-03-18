
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { ImagePlus, Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const uploadSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  image: z.instanceof(FileList).refine(files => files.length === 1, {
    message: "Please select one image",
  })
});

type UploadFormValues = z.infer<typeof uploadSchema>;

interface ImageUploadFormProps {
  categories: { name: string; id: string }[];
  onImageUploaded: (newImage: {
    src: string;
    alt: string;
    category: string;
    fallbackSrc: string;
  }) => void;
}

const ImageUploadForm = ({ categories, onImageUploaded }: ImageUploadFormProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [open, setOpen] = useState(false);
  
  const form = useForm<UploadFormValues>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      title: "",
      category: "",
    },
  });

  const onSubmit = async (data: UploadFormValues) => {
    setIsUploading(true);
    
    try {
      // In a real app, this would upload to a server
      // For now, we'll simulate the upload with a timeout
      // and use a local URL
      const file = data.image[0];
      
      if (!file) {
        throw new Error("No file selected");
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        throw new Error("Please upload an image file");
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("Image size should be less than 5MB");
      }
      
      // Create a local URL for the image
      const imageUrl = URL.createObjectURL(file);
      
      // Simulate server processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add the new image to the gallery
      onImageUploaded({
        src: imageUrl,
        alt: data.title,
        category: data.category,
        fallbackSrc: `https://placehold.co/600x400/e2e8f0/475569?text=${encodeURIComponent(data.title)}`,
      });
      
      // Show success message
      toast({
        title: "Image Uploaded",
        description: "Your image has been added to the gallery",
      });
      
      // Reset the form and close the dialog
      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2" size="lg">
          <ImagePlus size={20} />
          Upload Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload to Gallery</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter image title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => onChange(e.target.files)}
                      {...rest}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button 
                type="submit" 
                disabled={isUploading}
                className="w-full sm:w-auto"
              >
                {isUploading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadForm;
