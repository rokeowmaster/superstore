import Image from "next/image";
import Nav from "@/components/Nav";
import { getProducts } from "@/sanity/sanity.query";
import Products from "@/components/Products";
import Hero from "@/components/Hero";
import BottomNav from "@/components/BottomNav";
import { auth, clerkClient } from "@clerk/nextjs";

export default async function Home() {

  const userid = auth()
  const products = await getProducts()

  // console.log(userid)
  return (
    <>
      <Nav />
      <Hero />  
      <Products products={products}/>
    </>
  );
}
