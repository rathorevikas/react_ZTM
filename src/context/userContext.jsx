// import { createContext, useEffect, useReducer } from "react";
// import {
//   createUserDocumentFromAuth,
//   onAuthStateChangeListener,
// } from "../components/utils/firebase/firebase.utils";

// // as the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPE = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const initialState = {
//   currentUser: null,
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPE.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };

//     default:
//       throw new Error(`Unhandle type ${type} in userReducer`);
//   }
// };

// export const UserProvider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(null);

//   const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);

//   const setCurrentUser = (user) => {
//     dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangeListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   const value = { currentUser };

//   // useEffect with single render and return function

//   //   useEffect(() => {
//   //     let ignore = false;
//   //     onAuthStateChangeListener((user) => {
//   //       if (!ignore) console.log(user);
//   //     });

//   //     return () => {
//   //       ignore = true;
//   //     };
//   //   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
