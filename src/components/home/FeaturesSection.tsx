
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, Newspaper } from 'lucide-react';

const features = [
  {
    title: "<strong>Excellence in Education</strong>",
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

const FeaturesSection = () => {
  return (
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
              <h3 className="text-xl font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
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
  );
};

export default FeaturesSection;
