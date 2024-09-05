import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() =>{
    if (localStorage.getItem("tkn")!== null ) {

        setToken(localStorage.getItem("tkn"));
        
    }
  }, [])

  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
