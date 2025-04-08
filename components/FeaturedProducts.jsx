'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Neon Sneakers', price: '$129', image: '/product1.jpg' },
  { id: 2, name: 'Smart Watch', price: '$199', image: '/product2.jpg' },
  { id: 3, name: 'Cyber Backpack', price: '$89', image: '/product3.jpg' },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-black to-gray-900">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-xl"
            >
              <Image src={product.image} alt={product.name} width={400} height={400} />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
