
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { BookOpen, GraduationCap, Palette, Dumbbell, Star, Music, Languages, Microscope } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      title: "Primary Education",
      grades: "Grades 1-5",
      description: "A strong foundation in literacy, numeracy, and essential skills, fostering curiosity and a love for learning.",
      icon: BookOpen,
    },
    {
      title: "Middle School",
      grades: "Grades 6-8",
      description: "An engaging curriculum that builds on fundamentals while introducing more complex subjects and concepts.",
      icon: GraduationCap,
    },
    {
      title: "High School",
      grades: "Grades 9-10",
      description: "Comprehensive preparation for board examinations with specialized instruction and academic counseling.",
      icon: Star,
    },
    {
      title: "Senior Secondary",
      grades: "Grades 11-12",
      description: "Focused streams in Science, Commerce, and Humanities to prepare students for higher education and careers.",
      icon: Microscope,
    },
  ];

  const activities = [
    {
      title: "Arts & Crafts",
      description: "Opportunities for creative expression through various artistic mediums and techniques.",
      icon: Palette,
    },
    {
      title: "Sports & Athletics",
      description: "A range of sports activities to promote physical fitness, teamwork, and sportsmanship.",
      icon: Dumbbell,
    },
    {
      title: "Music & Performing Arts",
      description: "Programs in vocal and instrumental music, dance, and drama to nurture artistic talents.",
      icon: Music,
    },
    {
      title: "Language & Debate",
      description: "Activities to enhance communication skills, critical thinking, and public speaking abilities.",
      icon: Languages,
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Academics</h1>
            <p className="text-lg text-gray-600">Discover our comprehensive academic programs and extracurricular activities</p>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-lg text-gray-600">Comprehensive education from primary to senior secondary levels</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div 
                key={program.title} 
                className="glass-card p-6 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-school-blue/10 p-3 rounded-lg mr-4 mt-1">
                    <program.icon className="w-6 h-6 text-school-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <p className="text-sm text-school-blue font-medium">{program.grades}</p>
                  </div>
                </div>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-white to-school-blue/10">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curriculum Highlights</h2>
            <p className="text-lg text-gray-600">A balanced approach to education that develops both academic and life skills</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6 order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our curriculum is designed to provide a well-rounded education that balances academic rigor with practical skills development. We follow the CBSE curriculum, enhanced with additional resources and teaching methodologies to ensure comprehensive learning.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovative Teaching Methods</h3>
                <p className="text-gray-600 leading-relaxed">
                  We employ a variety of teaching techniques, including interactive lessons, project-based learning, and technology integration to engage students and cater to different learning styles.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Regular Assessments</h3>
                <p className="text-gray-600 leading-relaxed">
                  We conduct regular formative and summative assessments to monitor student progress and provide timely feedback, helping students identify strengths and areas for improvement.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-school-blue/30 via-transparent to-transparent mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                  alt="Classroom Learning" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-school-blue/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-school-blue/10 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
            <p className="text-lg text-gray-600">Holistic development through a diverse range of activities</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div 
                key={activity.title} 
                className="glass-card p-6 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="bg-school-blue/10 p-3 rounded-full mb-4">
                    <activity.icon className="w-6 h-6 text-school-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                </div>
                <p className="text-gray-600 text-center">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
