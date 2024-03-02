import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "products"]{
      _id,
      productName,
      productImage {alt, "image": asset->url},
      productDescription,
      productPrice,
    }`
  );
}