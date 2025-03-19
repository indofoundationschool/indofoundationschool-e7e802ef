
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Lightbulb, FileText, Award } from 'lucide-react';

const Curriculum = () => {
  return (
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
                src="/lovable-uploads/db8487fa-d890-4244-9872-a9bbabd534d8.png" 
                alt="Classroom Learning" 
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
                <Award className="w-6 h-6 text-school-blue" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-school-blue/20 to-school-blue-light/20 rounded-full blur-2xl"></div>
            </div>
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
  );
};

export default Curriculum;
