// app/components/MoreProducts.js
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './MoreProducts.css';

const products = [
  '/dress.jpg',
  '/earpods.jpg',
  '/hero-img.png',
  '/machine.jpg',
  '/sofa.jpg',
  '/tv.jpg',
  '/tvstand.webp',
];

export default function MoreProducts() {
    const containerRef = useRef(null);
    const [paused, setPaused] = useState(false);
  
    useEffect(() => {
      const container = containerRef.current;
      let animationFrameId;
      let scrollPosition = 0;
  
      const animate = () => {
        if (!paused) {
          scrollPosition += 1;
          container.scrollLeft = scrollPosition;
          if (scrollPosition >= container.scrollWidth - container.clientWidth) {
            scrollPosition = 0;
          }
        }
        animationFrameId = requestAnimationFrame(animate);
      };
  
      animate();
  
      return () => cancelAnimationFrame(animationFrameId);
    }, [paused]);
  
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">More Products</h2>
          <div
            className="scroll-container overflow-x-scroll whitespace-nowrap flex gap-6 cursor-pointer"
            ref={containerRef}
          >
            {products.map((src, i) => (
              <div
                key={i}
                className="product-item flex-shrink-0 w-64 h-64 bg-white rounded-2xl p-4 shadow-lg"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <Image
                  src={src}
                  alt={`More Product ${i + 1}`}
                  width={240}
                  height={240}
                  className="object-contain w-full h-full rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }