import React, { useContext } from "react";
import "./shop.styles.scss";
import { ProductsContext } from "../../../context/productsContext";
import ProductCard from "../../product-card/product-card.component";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
