import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import { CustomContextProvider } from "@/context/FoodsCard";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomContextProvider>
      <CustomThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>{" "}
    </CustomContextProvider>
  );
};

export default App;
