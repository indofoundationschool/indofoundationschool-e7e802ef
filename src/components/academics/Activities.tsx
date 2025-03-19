
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Dumbbell, Music, Languages } from 'lucide-react';

const activities = [
  {
    title: "Arts & Crafts",
    description: "Opportunities for creative expression through various artistic mediums and techniques.",
    icon: Palette,
    color: "bg-gradient-to-r from-rose-400 to-orange-300",
  },
  {
    title: "Sports & Athletics",
    description: "A range of sports activities to promote physical fitness, teamwork, and sportsmanship.",
    icon: Dumbbell,
    color: "bg-gradient-to-r from-green-400 to-cyan-400",
  },
  {
    title: "Music & Performing Arts",
    description: "Programs in vocal and instrumental music, dance, and drama to nurture artistic talents.",
    icon: Music,
    color: "bg-gradient-to-r from-purple-400 to-pink-400",
  },
  {
    title: "Language & Debate",
    description: "Activities to enhance communication skills, critical thinking, and public speaking abilities.",
    icon: Languages,
    color: "bg-gradient-to-r from-amber-400 to-yellow-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Activities = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-school-blue/5 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-2 px-4 bg-school-blue/10 rounded-full text-school-blue font-medium mb-4">
            Beyond Academics
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
          <p className="text-lg text-gray-600">Nurturing talents and developing well-rounded personalities</p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activities.map((activity) => (
            <motion.div 
              key={activity.title} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <div className={`h-36 ${activity.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/db8487fa-d890-4244-9872-a9bbabd534d8.png')] bg-cover bg-center"></div>
                  <div className="relative z-10 transform transition-all duration-500 group-hover:scale-125">
                    <activity.icon className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-school-blue transition-colors duration-300 mb-3">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
