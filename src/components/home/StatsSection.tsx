
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { number: 95, label: "Academic Success Rate" },
  { number: 50, label: "Qualified Teachers" },
  { number: 1000, label: "Happy Students" },
  { number: 25, label: "Years of Excellence" },
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
  );
};

export default StatsSection;
