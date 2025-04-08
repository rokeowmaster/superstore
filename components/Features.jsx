// app/components/Features.js
'use client';

import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Star } from 'lucide-react';

const features = [
  { icon: <Truck />, title: 'Fast Delivery', desc: 'Get your products in record time.' },
  { icon: <ShieldCheck />, title: 'Secure Payments', desc: 'All transactions are encrypted.' },
  { icon: <Star />, title: 'Top Rated', desc: 'Thousands of satisfied customers.' },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold">Why Shop With Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg space-y-4"
            >
              <div className="text-pink-500 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}