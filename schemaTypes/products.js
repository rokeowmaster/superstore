import { defineField } from "sanity";

const products = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    defineField({
        name: "productName",
        title: "Product Name",
        type: "string",
        description: "Product name",
        validation: (Rule) => Rule.required().min(5).max(50),
      }),
      {
        name: "productImage",
        title: "Product Image",
        type: "image",
        description: "Upload a product picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
      {
        name: "productDescription",
        title: "Product Description",
        type: "text",
        rows: 4,
      },
      {
        name: "productPrice",
        title: "Product Price",
        type: "string",
      },
  ],
};

export default products;