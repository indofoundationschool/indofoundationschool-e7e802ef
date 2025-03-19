
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, Newspaper, BookOpen, Star, Sparkles, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "<strong>Excellence in Education</strong>",
    description: "We provide an enriching educational environment that fosters academic excellence and personal growth.",
    icon: GraduationCap,
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    title: "<strong>Qualified Faculty</strong>",
    description: "Our experienced teachers are dedicated to nurturing each student's unique potential and abilities.",
    icon: Users,
    color: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-600",
  },
  {
    title: "<strong>Comprehensive Curriculum</strong>",
    description: "A balanced curriculum that emphasizes both academic achievement and character development.",
    icon: Award,
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-600",
  },
  {
    title: "<strong>Temple Values</strong>",
    description: "Our curriculum incorporates ancient temple wisdom and traditions for holistic development.",
    icon: Sparkles,
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-600",
  },
];

const additionalFeatures = [
  {
    icon: BookOpen,
    text: "Modern learning approaches",
  },
  {
    icon: Star,
    text: "Focus on creativity",
  },
  {
    icon: Heart,
    text: "Personalized attention",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent">Indo Foundation School</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We are committed to providing a <strong>nurturing environment</strong> that fosters <strong>academic excellence</strong>, <strong>character development</strong> and <strong>temple traditions</strong>.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm border border-blue-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <feature.icon className="w-5 h-5 text-school-blue mr-2" />
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-2xl w-fit mb-5 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/30 rounded-2xl transform rotate-45 scale-150 translate-x-1/2 translate-y-1/2 opacity-30"></div>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
                  <p className="text-gray-600 flex-grow">
                    {feature.description.split(' ').map((word, i) => 
                      ['enriching', 'excellence', 'experienced', 'dedicated', 'balanced', 'State-of-the-art', 'temple', 'wisdom', 'traditions', 'holistic'].includes(word) 
                        ? <strong key={i} className="text-gray-800">{word} </strong> 
                        : word + ' '
                    )}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-blue-50">
                    <motion.div 
                      className="inline-flex items-center text-school-blue-dark text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Learn more 
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatType: "reverse"
                        }}
                      >
                        <ArrowRight size={14} className="ml-1" />
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
