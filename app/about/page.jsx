'use client';

import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-16 flex flex-col items-center space-y-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-teal-500 to-lime-400 text-transparent bg-clip-text">
          About Our Store
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Redefining the online shopping experience with style, speed, and satisfaction.
        </p>
      </motion.div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {[
          {
            title: 'Our Mission',
            desc: 'Deliver top-notch fashion, electronics, and essentials at unbeatable prices—fast and fresh.',
          },
          {
            title: 'Customer First',
            desc: 'We prioritize your experience. Seamless browsing, easy checkout, and responsive support are core to us.',
          },
          {
            title: 'Innovation',
            desc: 'Using cutting-edge tech to personalize shopping, improve logistics, and set trends—not just follow them.',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="bg-white/5 backdrop-blur-lg border border-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10"
      >
        <Link href="/products">
        <button className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
          <ShoppingBag className="w-5 h-5" />
          <span>Start Shopping</span>
        </button>
        </Link>
      </motion.div>
    </main>
  );
}
