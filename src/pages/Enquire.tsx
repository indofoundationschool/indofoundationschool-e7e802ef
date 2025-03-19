import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import MapSection from '@/components/enquire/MapSection';

const Enquire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    grade: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, grade: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
      
      let body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Child's Name: ${formData.childName || 'Not provided'}\n` +
        `Grade of Interest: ${formData.grade || 'Not specified'}\n` +
        `Message: ${formData.message || 'No message provided'}\n\n` +
        `This enquiry was submitted through the school website.`
      );
      
      const mailtoLink = `mailto:indofoundationschool@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      toast.success('Enquiry prepared for submission! Your email client has been opened.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        childName: '',
        grade: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting your enquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const schoolCoordinates = "28.883885709030803,76.59034881178829";
  const schoolName = encodeURIComponent("Indo Foundation School, Shivaji Colony");
  
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${schoolCoordinates}`;

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'indofoundationschool@gmail.com',
      link: 'mailto:indofoundationschool@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: (
        <>
          +91 9896110054<br />
          +91 9896205966<br />
          01262237556
        </>
      ),
      link: 'tel:+919896110054',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: (
        <>
          Plot No 42/8, Shivaji Colony Rohtak, Haryana 124001
          <div className="text-xs mt-1 text-school-blue">28.883885709030803, 76.59034881178829</div>
        </>
      ),
      link: `https://www.google.com/maps?q=${schoolCoordinates}&z=18`,
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enquire Now</h1>
            <p className="text-lg text-gray-600">We're here to answer your questions and provide information about our programs</p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1 space-y-6">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                  >
                    <Card className="glass-card overflow-hidden">
                      <a 
                        href={item.link} 
                        target={item.icon === MapPin ? "_blank" : undefined} 
                        rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                        className="flex items-start p-4 hover:bg-gray-50/50 transition-colors"
                      >
                        <div className="bg-school-blue/10 p-3 rounded-lg mr-4">
                          <item.icon className="w-5 h-5 text-school-blue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-gray-600 mt-1">{item.details}</p>
                          {item.icon === MapPin && (
                            <span className="text-school-blue text-xs flex items-center mt-2">
                              View on Google Maps <ExternalLink size={12} className="ml-1" />
                            </span>
                          )}
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">School Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 8:00 AM - 3:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 8:00 AM - 12:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:col-span-2 glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted ? (
                <motion.div 
                  className="text-center py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="inline-flex justify-center items-center rounded-full p-4 bg-green-100 text-green-600 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Your enquiry has been prepared for submission. Please send the email that opened in your email client.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="focus-ring"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="focus-ring"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="focus-ring"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="childName">Child's Name</Label>
                      <Input
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="Child's name"
                        className="focus-ring"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade of Interest</Label>
                    <Select value={formData.grade} onValueChange={handleSelectChange}>
                      <SelectTrigger id="grade" className="focus-ring">
                        <SelectValue placeholder="Select a grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pre-primary">Pre-Primary</SelectItem>
                        <SelectItem value="primary">Primary (Grades 1-5)</SelectItem>
                        <SelectItem value="middle">Middle School (Grades 6-8)</SelectItem>
                        <SelectItem value="high">High School (Grades 9-10)</SelectItem>
                        <SelectItem value="senior">Senior Secondary (Grades 11-12)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share your questions or requirements..."
                      rows={4}
                      className="resize-none focus-ring"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={submitting}
                    className="bg-school-blue hover:bg-school-blue-dark text-white w-full sm:w-auto"
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={16} className="mr-2" />
                        Submit Enquiry
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      <MapSection 
        coordinates={schoolCoordinates} 
        schoolName={decodeURIComponent(schoolName)} 
        mapUrl={mapUrl} 
      />
    </Layout>
  );
};

export default Enquire;
