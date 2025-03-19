
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, GraduationCap, Star, Microscope } from 'lucide-react';

const programs = [
  {
    title: "Primary Education",
    grades: "Grades 1-5",
    description: "A strong foundation in literacy, numeracy, and essential skills, fostering curiosity and a love for learning.",
    icon: BookOpen,
    color: "bg-gradient-to-tr from-amber-300/60 to-amber-500/60",
    accentColor: "bg-amber-400",
  },
  {
    title: "Middle School",
    grades: "Grades 6-8",
    description: "An engaging curriculum that builds on fundamentals while introducing more complex subjects and concepts.",
    icon: GraduationCap,
    color: "bg-gradient-to-tr from-sky-300/60 to-sky-500/60",
    accentColor: "bg-sky-400",
  },
  {
    title: "High School",
    grades: "Grades 9-10",
    description: "Comprehensive preparation for board examinations with specialized instruction and academic counseling.",
    icon: Star,
    color: "bg-gradient-to-tr from-purple-300/60 to-purple-500/60",
    accentColor: "bg-purple-400",
  },
  {
    title: "Senior Secondary",
    grades: "Grades 11-12",
    description: "Focused streams in Science, Commerce, and Humanities to prepare students for higher education and careers.",
    icon: Microscope,
    color: "bg-gradient-to-tr from-emerald-300/60 to-emerald-500/60",
    accentColor: "bg-emerald-400",
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

const Programs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-2 px-4 bg-school-blue/10 rounded-full text-school-blue font-medium mb-4">
            Our Academic Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Education Journey
          </h2>
          <p className="text-lg text-gray-600">
            From foundational learning to college preparation, our academic programs 
            are designed to support every stage of your child's educational journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program) => (
            <motion.div 
              key={program.title} 
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                <div className={`h-24 ${program.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/db8487fa-d890-4244-9872-a9bbabd534d8.png')] bg-cover bg-center"></div>
                  <div className={`absolute -bottom-6 left-6 w-12 h-12 ${program.accentColor} rounded-lg shadow-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-school-blue transition-colors duration-300">{program.title}</h3>
                  <p className="text-sm text-school-blue font-medium mb-3">{program.grades}</p>
                  <p className="text-gray-600">{program.description}</p>
                  <div className="mt-5 flex justify-end">
                    <Button variant="ghost" size="sm" className="text-school-blue hover:text-school-blue-dark hover:bg-school-blue/5 p-0 h-auto">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
