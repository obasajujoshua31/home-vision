import React, { createContext, useReducer } from "react";
import appReducer, { initialState } from "./reducer";

export const globalContext = createContext(initialState);

const Provider = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialState);

  return (
    <globalContext.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default Provider;
