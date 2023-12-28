import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextComp({ children }) {
  const [loading, setloading] = useState(false);
  return (
    <GlobalContext.Provider value={{ loading, setloading }}>
      {children}
    </GlobalContext.Provider>
  );
}
