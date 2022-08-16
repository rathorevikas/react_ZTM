import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// import { UserProvider } from "./context/userContext";
// import { CategoriesProvider } from "./context/categoriesContext";
// import { CartProvide } from "./context/cartContext";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        {/* <CartProvide> */}
        <App />
        {/* </CartProvide> */}
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
