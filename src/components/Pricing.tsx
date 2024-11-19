import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    features: [
      '5 Team Members',
      '10GB Storage',
      'Basic Support',
      'Basic Analytics'
    ]
  },
  {
    name: 'Professional',
    price: 99,
    popular: true,
    features: [
      'Unlimited Team Members',
      '100GB Storage',
      'Priority Support',
      'Advanced Analytics',
      'Custom Integrations'
    ]
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Unlimited Everything',
      'Dedicated Support',
      'Custom Solutions',
      'Advanced Security',
      'SLA Guarantee'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                bg-white rounded-2xl shadow-lg p-8
                ${plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''}
              `}
            >
              {plan.popular && (
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="mt-4 text-gray-600">
                <span className="text-4xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                /month
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-indigo-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-full mt-8 px-6 py-3 rounded-lg font-semibold
                  ${plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }
                  transition-colors
                `}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}