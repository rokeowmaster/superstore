// app/components/Newsletter.js
'use client';

import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-gray-900 to-black">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center bg-gray-800 rounded-2xl p-10 space-y-6 shadow-xl"
      >
        <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
        <p className="text-gray-300">Be the first to get updates on new drops and exclusive deals.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl text-black w-full md:w-2/3"
          />
          <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-xl text-white shadow">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}