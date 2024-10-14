import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
    
    breakpoints: {
        values: {
          xs: 0,
          sm: 300,
          md: 450,
          lg: 1200,
          xl: 1620,
        },
      },
      palette: {
        primary: {
          main: "#18BA51",
          dark: "#000000",
          light: "#FFFFFF",
        },
      },
});
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };