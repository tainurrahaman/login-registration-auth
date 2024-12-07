import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase_init";

export const AuthContext = createContext(null);

const name = "Germany";

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const authInfo = {
  name,
  createUser,
  logInUser,
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
