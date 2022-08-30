import Home from "./components/routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import { useEffect } from "react";
// import {
//   createUserDocumentFromAuth,
//   getCurrentUser,
//   onAuthStateChangeListener,
// } from "./components/utils/firebase/firebase.utils";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux/es/exports";

const App = () => {
  const dispatch = useDispatch();
  //AUTHENTICATION USING REDUX THUNK
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChangeListener((user) => {
  //       if (user) {
  //         createUserDocumentFromAuth(user);
  //       }
  //       dispatch(setCurrentUser(user));
  //     });
  //     return unsubscribe;
  //   }, []);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
