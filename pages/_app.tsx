import "../styles/globals.css";
import colors from "../styles/colors";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ colors }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
