
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, Clock } from 'lucide-react';

const achievements = [
  { 
    number: 95, 
    label: "Academic Success Rate",
    icon: GraduationCap,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  { 
    number: 50, 
    label: "Qualified Teachers",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  { 
    number: 1000, 
    label: "Happy Students",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-100"
  },
  { 
    number: 25, 
    label: "Years of Excellence",
    icon: Clock,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  },
];

const StatsSection = () => {
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
    <section id="stats-section" className="py-24 bg-gradient-to-b from-white via-blue-50/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Celebrating our milestones and continued commitment to educational excellence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.label} 
              className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`absolute top-0 right-0 w-20 h-20 ${achievement.bgColor} rounded-full opacity-20 -translate-y-1/4 translate-x-1/4`}></div>
              <div className="text-center relative z-10">
                <div className={`${achievement.bgColor} ${achievement.color} w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <achievement.icon size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent mb-2">
                  {animatedNumbers[index]}+
                </h3>
                <p className="text-gray-700 font-medium">{achievement.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
