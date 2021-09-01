import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import "prism-themes/themes/prism-vsc-dark-plus.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
