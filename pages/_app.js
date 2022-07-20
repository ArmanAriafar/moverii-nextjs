import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "../styles/Fonts.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
