import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
