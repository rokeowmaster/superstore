"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { getProduct } from "@/sanityclient/query";
import { useCart } from "@/context/cartContext"; // ✅ Import useCart hook
import Image from "next/image";
import client from "@/sanityclient/client";
import { urlFor } from "@/sanityclient/client";
import { Banner, Nav } from "@/components";

export default function ProductDetails() {
  const params = useParams(); // ✅ Get the product ID from URL params
  const { addToCart } = useCart(); // ✅ Get addToCart from cart context
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    const fetchProduct = async () => {
      try {
        const data = await getProduct(client);
        const foundProduct = data.find((item) => item._id === params.id);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params?.id]);

  if (loading) return <p className="text-center py-10 text-gray-500">Loading...</p>;
  if (!product) return notFound();

  return (
    <div>
      <Banner />  
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <Image
            src={urlFor(product.productImage).url()}
            alt={product.productName}
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow"
          />

          {/* Product Details */}
          <div>
            <h2 className="text-3xl font-bold text-white">{product.productName}</h2>
            <p className="text-xl text-blue-600 font-semibold mt-2">
              Kshs. {product.productPrice.toFixed(2)}
            </p>
            <p className="mt-4 text-gray-600">{product.productDescription}</p>
            <button
              onClick={() => addToCart(product)} // ✅ Now addToCart works!
              className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
