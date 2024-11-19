import { motion } from 'framer-motion';
import { Code2, Palette, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            I'm a passionate developer with 5+ years of experience in creating beautiful,
            functional, and user-friendly websites and applications. I love turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Code2,
              title: 'Development',
              description: 'I enjoy bringing ideas to life in the browser.'
            },
            {
              icon: Palette,
              title: 'Design',
              description: 'I value simple content structure and clean design patterns.'
            }
         
          ].map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
                <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}