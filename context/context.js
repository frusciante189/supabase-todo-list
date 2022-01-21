import React, { createContext, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const exposed = {};
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default Provider;
