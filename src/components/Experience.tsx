import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Led development of multiple high-impact web applications using React and TypeScript.'
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2019 - 2021',
    description: 'Developed and maintained full-stack applications using Node.js and React.'
  },
  {
    type: 'education',
    title: 'Master in Computer Science',
    company: 'Tech University',
    period: '2017 - 2019',
    description: 'Specialized in Software Engineering and Web Technologies.'
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Science',
    company: 'State University',
    period: '2013 - 2017',
    description: 'Foundation in programming, algorithms, and software development.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-indigo-200 dark:bg-indigo-800" />
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                {exp.type === 'work' ? (
                  <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                )}
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <div className="text-indigo-600 dark:text-indigo-400 mb-2">
                  {exp.company}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.period}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}