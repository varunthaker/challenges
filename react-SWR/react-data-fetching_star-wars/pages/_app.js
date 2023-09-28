import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
