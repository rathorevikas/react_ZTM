// import { createContext, useEffect, useState } from "react";
// // import PRODUCTS from "../shop-data.json";
// // import SHOP_DATA from "../shop-data.js";
// import { getCategoriesAndDocument } from "../components/utils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   // useEffect(() =>{
//   //   addCollectionAndDocument("categories", SHOP_DATA);
//   // },[])

//   useEffect(() => {
//     const getCategoriesData = async () => {
//       const categoryMap = await getCategoriesAndDocument();
//       setCategoriesMap(categoryMap);
//     };

//     getCategoriesData();
//   }, []);

//   const value = { categoriesMap };

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
