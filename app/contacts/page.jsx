'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactComponent() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center relative">
        {/* Left Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 z-10 text-white"
        >
          <h2 className="text-5xl font-bold leading-tight">
            Get in Touch with <span className="text-pink-500">SuperStore</span>
          </h2>
          <p className="text-lg text-gray-300">
            Have questions? We'd love to hear from you!
          </p>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 text-pink-500">
              <i className="fas fa-phone-alt text-2xl"></i>
              <p className="text-lg">+1 (234) 567-890</p>
            </div>
            <div className="flex items-center space-x-3 text-pink-500">
              <i className="fas fa-envelope text-2xl"></i>
              <p className="text-lg">contact@shop.com</p>
            </div>
            <div className="flex items-center space-x-3 text-pink-500">
              <i className="fab fa-facebook text-2xl"></i>
              <p className="text-lg">facebook.com/shop</p>
            </div>
          </motion.div>

          {/* Button to toggle contact form */}
          <motion.button
            className="mt-6 py-3 px-8 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg rounded-xl shadow-lg transition"
            onClick={handleToggleForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {showForm ? 'Close Contact Form' : 'Contact Us'}
          </motion.button>
        </motion.div>

        {/* Right Contact Form Section */}
        {showForm && (
          <motion.div
            className="w-full max-w-md bg-black p-6 rounded-lg shadow-lg space-y-4 mt-8 md:mt-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-center text-pink-500">Send Us a Message</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border-2 border-pink-500 focus:border-pink-600 outline-none text-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border-2 border-pink-500 focus:border-pink-600 outline-none text-gray-800"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg border-2 border-pink-500 focus:border-pink-600 outline-none text-gray-800"
            ></textarea>

            <motion.button
              className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
