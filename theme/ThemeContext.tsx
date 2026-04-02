import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { ColorSchemeName } from "react-native";
import { darkTheme, lightTheme, type Theme } from "./colors";

const ThemeContext = createContext<Theme | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
  colorScheme: ColorSchemeName;
};

export function ThemeProvider({ children, colorScheme }: ThemeProviderProps) {
  const theme = useMemo(() => (colorScheme === "dark" ? darkTheme : lightTheme), [colorScheme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme doit être utilisé dans un ThemeProvider");
  }
  return theme;
}
