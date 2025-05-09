import React from "react";
import ProductCard from "./product-card";

const ProductList = ({ filteredProducts }) => {
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-[15px] gap-y-[70px] justify-center">
        {filteredProducts.products?.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
