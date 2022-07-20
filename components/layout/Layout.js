//? Components
import Navigation from "./Navigation";
import Footer from "./Footer";

//? Comp
export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}
