import Image from "next/image";
import Nav from "@/components/Nav";
import { getProducts } from "@/sanity/sanity.query";
import { urlForImage } from "@/sanity/sanity.client";
import Products from "@/components/Products";
import Hero from "@/components/Hero";
import BottomNav from "@/components/BottomNav";

export default async function Home() {

  const products = await getProducts()

//   console.log(products)
  return (
    <>
      <Nav />
      <Hero />  
      <Products products={products}/>
      <BottomNav />
    </>
  );
}
