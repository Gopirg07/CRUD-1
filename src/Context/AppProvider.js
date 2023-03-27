import React, { createContext, useContext, useState } from "react";
import { data } from "../datas/data";


//Step 1)Create a context
const AppContext = createContext();


export default function AppProvider({ children }) {

  //Step 2) Create provider subscriber model
  const [user, setUser] = useState(data);
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

//Step 3) Use Context
export const AppState = () => {
  return useContext(AppContext);
};
