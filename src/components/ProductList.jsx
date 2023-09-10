import React from "react";
import Carousels from "./Carousels";
import ProductCard from "./ProductCard";
import Navbars from "./Navbar";

const ProductList = () => {
  const products = [
    {
      title: "Kedarnath Temple",
      description: "Mahadev Temle",
      imageUrl: "./././images/IMG20230724104747.jpg",
    },
    {
      title: "Aadiyog",
      description: "Mahadev",
      imageUrl: "./././images/IMG20230724104810.jpg",
    },
    {
      title: "Kedarnath Temple",
      description: "Mahadev Temle",
      imageUrl: "./././images/IMG20230724104747.jpg",
    },
    {
      title: "Aadiyog",
      description: "Mahadev",
      imageUrl: "./././images/IMG20230724104810.jpg",
    },
    {
      title: "Kedarnath Temple",
      description: "Mahadev Temle",
      imageUrl: "./././images/IMG20230724104747.jpg",
    },
    {
      title: "Aadiyog",
      description: "Mahadev",
      imageUrl: "./././images/IMG20230724104810.jpg",
    },
    {
      title: "Kedarnath Temple",
      description: "Mahadev Temle",
      imageUrl: "./././images/IMG20230724104747.jpg",
    },
    {
      title: "Aadiyog",
      description: "Mahadev",
      imageUrl: "./././images/IMG20230724104810.jpg",
    },
    {
      title: "Kedarnath Temple",
      description: "Mahadev Temle",
      imageUrl: "./././images/IMG20230724104747.jpg",
    },
    {
      title: "Aadiyog",
      description: "Mahadev",
      imageUrl: "./././images/IMG20230724104810.jpg",
    },
    // Add more products...
  ];
  return (
    <>
      <Navbars />
      <Carousels />
      <div className="container my-3">
        <ProductCard products={products} />
      </div>
    </>
  );
};

export default ProductList;
