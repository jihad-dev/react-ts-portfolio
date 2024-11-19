import { motion } from 'framer-motion';
import { Code, Globe, Database, Palette, Terminal, GitBranch } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
  },
  {
    category: 'Design',
    icon: Palette,
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Wireframing']
  },
  {
    category: 'Tools',
    icon: Terminal,
    items: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <skill.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (itemIndex * 0.1) }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}