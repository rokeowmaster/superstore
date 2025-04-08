'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center relative">
        {/* Left Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 z-10"
        >
          <h2 className="text-5xl font-bold leading-tight text-white">
            Upgrade Your Style<br /> with <span className="text-pink-500">SuperStore</span>
          </h2>
          <p className="text-lg text-gray-300">
            Discover the trendiest items, handpicked just for you.
          </p>
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-lg transition">
            Shop Now
          </button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center z-0 mt-10 md:mt-0"
        >
          <Image
            src="/headphone.svg" // <-- Make sure this image exists
            alt="Hero Product"
            width={500}
            height={500}
            className="object-contain rounded-2xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
