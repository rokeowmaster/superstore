import React from "react";
import { HeroSection, Navbar, FeaturedProducts, Features, MoreProducts, Newsletter, Footer } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <Features />
      <MoreProducts />
      <Newsletter />
      <Footer />
    </main>
  );
}
