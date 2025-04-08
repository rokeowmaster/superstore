"use client";

import { useEffect, useState } from "react";
import { getProduct } from "@/sanityclient/query";
// import { Banner, Nav } from "@/components";
import { Navbar } from "@/components";
import client from "@/sanityclient/client";
import { urlFor } from "@/sanityclient/client";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct(client);
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
    <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {products.map(
              (product) =>
                product.productImage && (
                  <div
                    key={product._id}
                    className="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center"
                  >
                    {/* Wrap the Image in a Link */}
                    <Link href={`/products/${product._id}`}>
                      <Image
                        src={urlFor(product.productImage).url()}
                        alt={product.name || "Product Image"}
                        width={250}
                        height={250}
                        className="w-[250px] h-[250px] object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                      />
                    </Link>
                    <h3 className="text-xl font-medium mt-4">{product.productName}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {product.productDescription}
                    </p>
                    <p className="text-orange-500 text-lg font-semibold mt-2">
                      Kshs. {product.productPrice.toFixed(2)}
                    </p>
                    <button
                      className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                )
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
