import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//ユーザー状態
const initialState = {
  // user: null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: {
  //   _id: "62ac51fc2fb3dd6fabcfc054",
  //   username: "kaity",
  //   email: "kaito@example.com",
  //   password: "kaitokaito",
  //   profilePicture: "/person/1.jpeg",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
  // isFetching: false,
  // erro: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
