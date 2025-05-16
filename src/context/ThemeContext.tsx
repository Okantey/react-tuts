// import these from react to help with our context

import { createContext, ReactNode, useState } from "react";

// create an interface or a type for our context called Theme
interface ThemeType {
  theme: string;
  setTheme: (theme: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}
// create a variable which initializes our theme context
export const ThemeContext = createContext<ThemeType | undefined>(undefined);

// a functional component that receives children prop which will allow us pass values down the dom tree
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // normal state variables we want to enable globally
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // dummy logout function to test if our global state is working
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, isAuthenticated, setIsAuthenticated, logout }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
