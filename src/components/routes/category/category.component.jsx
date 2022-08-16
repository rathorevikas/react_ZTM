import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { CategoriesContext } from "../../../context/categoriesContext";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../../store/categories/categories.selector";
import ProductCard from "../../product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import Spinner from "../../spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
