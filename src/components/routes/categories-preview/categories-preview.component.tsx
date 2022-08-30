import React, { Fragment } from "react";
// import { CategoriesContext } from "../../../context/categoriesContext";
import CategoryPreview from "../../category-preview/category-preview.component";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { selectCategoriesMap, selectIsLoading } from "../../../store/categories/categories.selector";
import Spinner from "../../spinner/spinner.component";
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
