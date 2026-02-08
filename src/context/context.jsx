import { createContext, useState } from "react";

export const ModeContext = createContext();

export const DarkProvider = ({ children }) => {
  const [isdark, setisdark] = useState(false);

  return (
    <ModeContext.Provider value={{ isdark, setisdark }}>
      {children}
    </ModeContext.Provider>
  );
};
