import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { CustomThemeProvider } from "@/utils/CustomTheme";

const App = ({ Component, pageProps }: AppProps) => {
  return <CustomThemeProvider><Layout><Component {...pageProps} /></Layout></CustomThemeProvider>;
};

export default App;
