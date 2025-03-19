import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { BookOpen, Users, Award, Target, Shield, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in all aspects of education and character development.",
      icon: Award,
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty, ethics, and transparency.",
      icon: Shield,
    },
    {
      title: "Innovation",
      description: "We embrace innovative teaching methods and technologies to enhance learning.",
      icon: BookOpen,
    },
    {
      title: "Inclusivity",
      description: "We create an inclusive environment that celebrates diversity and respects all individuals.",
      icon: Users,
    },
    {
      title: "Leadership",
      description: "We develop future leaders who will make positive contributions to society.",
      icon: Target,
    },
    {
      title: "Compassion",
      description: "We nurture empathy and kindness in our students and community.",
      icon: Heart,
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">Learn more about Indo Foundation School's mission, vision, and values.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-school-blue/30 via-transparent to-transparent mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Indo Foundation School" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-school-blue/20 rounded-full blur-2xl"></div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  Established with a vision to provide quality education, Indo Foundation School has been a center of academic excellence and holistic development. Since our inception, we have been committed to nurturing young minds and helping them realize their full potential.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide a stimulating learning environment that encourages students to innovate, explore and develop skills that will help them become lifelong learners and leaders in a global society.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be recognized as a premier educational institution that inspires excellence, nurtures talent, and develops responsible global citizens who contribute positively to society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our approach to education</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                className="glass-card p-6 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-school-blue/10 p-3 rounded-lg mr-4">
                    <value.icon className="w-6 h-6 text-school-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-white to-school-blue/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glass-card p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative w-full md:w-auto md:flex-shrink-0 flex justify-center items-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 relative">
                    <img 
                      src="/lovable-uploads/cf0780d0-79ac-4bac-952b-c84c3c6d7141.png" 
                      alt="Indo Foundation School Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our School Motto</h3>
                  <p className="text-gray-600 italic mb-4">"विद्या परम् भूषणम्" (Knowledge is the Supreme Ornament)</p>
                  <p className="text-gray-600">
                    Our motto emphasizes the importance of knowledge as the most valuable asset one can possess. It guides our educational philosophy and inspires our students to pursue knowledge with passion and dedication.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

