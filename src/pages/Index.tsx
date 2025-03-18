
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, GraduationCap, Users, Award, Newspaper } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const features = [
  {
    title: "Excellence in Education",
    description: "We provide an enriching educational environment that fosters academic excellence and personal growth.",
    icon: GraduationCap,
  },
  {
    title: "Qualified Faculty",
    description: "Our experienced teachers are dedicated to nurturing each student's unique potential and abilities.",
    icon: Users,
  },
  {
    title: "Comprehensive Curriculum",
    description: "A balanced curriculum that emphasizes both academic achievement and character development.",
    icon: Award,
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art facilities designed to enhance the learning experience of our students.",
    icon: Newspaper,
  },
];

const achievements = [
  { number: 95, label: "Academic Success Rate" },
  { number: 50, label: "Qualified Teachers" },
  { number: 1000, label: "Happy Students" },
  { number: 25, label: "Years of Excellence" },
];

const Index = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>(achievements.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateNumbers();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateNumbers = () => {
    achievements.forEach((achievement, index) => {
      const duration = 2000; // ms
      const steps = 60;
      const stepValue = achievement.number / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= achievement.number) {
          clearInterval(timer);
          setAnimatedNumbers((prev) => {
            const newNumbers = [...prev];
            newNumbers[index] = achievement.number;
            return newNumbers;
          });
        } else {
          setAnimatedNumbers((prev) => {
            const newNumbers = [...prev];
            newNumbers[index] = Math.floor(current);
            return newNumbers;
          });
        }
      }, duration / steps);
    });
  };

  return (
    <Layout>
      <section className="relative min-h-screen bg-gradient-to-b from-school-blue/5 to-white flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-school-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-school-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-school-blue/10 text-school-blue px-4 py-1 rounded-full text-sm font-medium">Welcome to</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Indo Foundation <span className="text-school-blue">School</span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <strong>Nurturing minds</strong>, <strong>shaping futures</strong>. We provide a <strong>holistic educational experience</strong> focused on <strong>academic excellence</strong> and <strong>character development</strong>.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button size="lg" className="bg-school-blue hover:bg-school-blue-dark text-white rounded-full">
                  <Link to="/about" className="flex items-center space-x-2">
                    <span>Discover More</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-school-blue text-school-blue hover:bg-school-blue/10 rounded-full">
                  <Link to="/enquire" className="flex items-center space-x-2">
                    <span>Enquire Now</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -z-10 inset-0 bg-school-blue/20 rounded-full blur-3xl transform scale-75 translate-x-10 translate-y-10"></div>
                <img 
                  src="/lovable-uploads/cf0780d0-79ac-4bac-952b-c84c3c6d7141.png" 
                  alt="Indo Foundation School Building" 
                  className="w-full h-auto object-contain rounded-xl shadow-xl relative z-10 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose <span className="text-school-blue">Indo Foundation School</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We are committed to providing a <strong>nurturing environment</strong> that fosters <strong>academic excellence</strong> and <strong>character development</strong>.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                className="glass-card p-6 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <div className="bg-school-blue/10 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-school-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">
                  {feature.description.split(' ').map((word, i) => 
                    ['enriching', 'excellence', 'experienced', 'dedicated', 'balanced', 'State-of-the-art'].includes(word) 
                      ? <strong key={i}>{word} </strong> 
                      : word + ' '
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats-section" className="py-16 bg-gradient-to-b from-white to-school-blue/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.label} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-school-blue mb-2">
                  {animatedNumbers[index]}+
                </h3>
                <p className="text-gray-600"><strong>{achievement.label}</strong></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-school-blue/10 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Join Our School?
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Take the first step towards providing your child with an <strong>exceptional educational experience</strong>. Contact us today to learn more or schedule a visit.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button size="lg" className="bg-school-blue hover:bg-school-blue-dark text-white rounded-full">
                <Link to="/enquire" className="flex items-center space-x-2">
                  <span>Enquire Now</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
