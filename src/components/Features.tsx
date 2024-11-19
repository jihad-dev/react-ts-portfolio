import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Your data is protected with enterprise-grade security measures.'
  },
  {
    icon: Zap,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together efficiently with powerful collaboration features.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our solution stand out from the rest
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}