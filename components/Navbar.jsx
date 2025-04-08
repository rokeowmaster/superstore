'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed w-full bg-black bg-opacity-80 p-4 z-50 shadow-lg"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          SuperStore
        </Link>
        <ul className="flex gap-6 text-white">
          {[
            { name: 'Home', href: '/' },
            { name: 'Shop', href: '/products' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
          ].map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className="hover:text-pink-500 transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
