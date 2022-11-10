import { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {

  const [tab, setTab] = useState(0);
  
  function changeTab(id) {
    setTab(id);
  }

  return (
    <ApplicationContext.Provider value={{ tab, changeTab }}>
      {children}
    </ApplicationContext.Provider>
  )
}