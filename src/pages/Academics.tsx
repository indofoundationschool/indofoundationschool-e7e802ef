
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { BookOpen, GraduationCap, Palette, Dumbbell, Star, Music, Languages, Microscope, Award, Lightbulb, FileText, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Academics = () => {
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

  const faqs = [
    {
      question: "What curriculum do you follow?",
      answer: "We follow the CBSE curriculum, enhanced with additional resources and teaching methodologies to ensure comprehensive learning and skill development."
    },
    {
      question: "How do you assess student performance?",
      answer: "We employ a holistic assessment system that includes formative and summative evaluations, projects, class participation, and standardized tests to measure academic progress and skill development."
    },
    {
      question: "What support services do you offer for students?",
      answer: "We provide academic counseling, remedial classes, advanced learning opportunities, and access to educational resources to support every student's learning journey."
    },
    {
      question: "How do you prepare students for competitive exams?",
      answer: "Our specialized coaching programs, practice tests, and targeted study materials help students prepare effectively for various competitive examinations and board exams."
    }
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

  return (
    <Layout>
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-school-blue/20 to-white/80 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')] bg-cover bg-center"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-school-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-school-blue/5 rounded-full blur-3xl"></div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full bg-amber-400/30 backdrop-blur-sm"
            animate={{ 
              y: [0, -15, 0], 
              x: [0, 10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-purple-400/30 backdrop-blur-sm"
            animate={{ 
              y: [0, 20, 0], 
              x: [0, -15, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full bg-emerald-400/30 backdrop-blur-sm"
            animate={{ 
              y: [0, -25, 0], 
              x: [0, -10, 0],
              rotate: [0, 20, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-school-blue-dark via-school-blue to-school-blue-light">
              Academic Excellence
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Discover our comprehensive approach to education that nurtures intellectual curiosity, 
              critical thinking, and a lifelong passion for learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-school-blue hover:bg-school-blue-dark transition-all duration-300 gap-2 shadow-lg hover:shadow-xl"
              >
                Explore Programs <ChevronRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-school-blue text-school-blue hover:bg-school-blue/10 transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Academic Programs Section */}
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
            {programs.map((program, index) => (
              <motion.div 
                key={program.title} 
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                  <div className={`h-24 ${program.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')] bg-cover bg-center"></div>
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
      
      {/* Curriculum Highlights Section with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-school-blue/5">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-2 px-4 bg-school-blue/10 rounded-full text-school-blue font-medium mb-4">
              Curriculum
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Future-Ready Approach to Learning
            </h2>
            <p className="text-lg text-gray-600">
              Our balanced curriculum develops both academic excellence and essential life skills
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative shadow-2xl rounded-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-school-blue/30 before:via-transparent before:to-transparent before:z-10">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                  alt="Classroom Learning" 
                  className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
                  <Award className="w-6 h-6 text-school-blue" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-school-blue/80 backdrop-blur-md p-5 rounded-full shadow-xl z-20 hover:bg-school-blue transition-colors duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-school-blue/20 to-school-blue-light/20 rounded-full blur-2xl"></div>
            </motion.div>
            
            <motion.div 
              className="space-y-8 order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-school-blue to-school-blue-light p-3 rounded-lg text-white">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Comprehensive Education</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                          Our curriculum provides a well-rounded education balancing academic rigor with practical skills development, following enhanced CBSE guidelines with additional resources and innovative teaching methodologies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -z-10 -top-2 -left-2 w-12 h-12 bg-amber-300/30 rounded-lg blur-lg"></div>
              </div>
              
              <div className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg text-white">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Innovative Teaching Methods</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                          We employ diverse teaching techniques including interactive lessons, project-based learning, and technology integration to engage students and accommodate different learning styles.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -z-10 -top-2 -right-2 w-12 h-12 bg-purple-300/30 rounded-lg blur-lg"></div>
              </div>
              
              <div className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-lg text-white">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Regular Assessments</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                          Our regular formative and summative assessments monitor student progress and provide timely feedback, helping identify strengths and areas for improvement.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -z-10 -bottom-2 -left-2 w-12 h-12 bg-emerald-300/30 rounded-lg blur-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Extracurricular Activities Section */}
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
            {activities.map((activity, index) => (
              <motion.div 
                key={activity.title} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
                  <div className={`h-36 ${activity.color} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')] bg-cover bg-center"></div>
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
      
      {/* FAQ Section */}
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
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to commonly asked questions about our academic programs</p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                      <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-school-blue py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="max-w-2xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Still have questions about our academic programs or approach?
            </p>
            <Button 
              size="lg" 
              className="bg-school-blue hover:bg-school-blue-dark transition-all duration-300 gap-2 shadow-lg hover:shadow-xl"
            >
              Contact Academic Office
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
