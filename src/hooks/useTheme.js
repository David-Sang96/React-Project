import { useContext } from "react";
import { ThemeContext } from "../context";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    new Error("Theme should only be used in ThemeContextProvider");
  }
  return context;
};
