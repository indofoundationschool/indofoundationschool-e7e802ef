
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const Faq = () => {
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
  );
};

export default Faq;
