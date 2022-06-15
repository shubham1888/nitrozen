import React from "react";
// create contex
// provider
// consumer lengthy removed useContext hook
// useContext hook
const quoteContext = React.createContext();

// to create a provider function
const quoteProvider = ({ children }) => {
  return (
    <>
      <quoteContext.Provider value={"shubham shah"}>
        {children}
      </quoteContext.Provider>
    </>
  );
};
export { quoteContext, quoteProvider };
