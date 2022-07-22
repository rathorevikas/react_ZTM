import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../components/utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // useEffect with single render and return function

  //   useEffect(() => {
  //     let ignore = false;
  //     onAuthStateChangeListener((user) => {
  //       if (!ignore) console.log(user);
  //     });

  //     return () => {
  //       ignore = true;
  //     };
  //   }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
