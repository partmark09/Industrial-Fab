import Navbar from "../components/Navbar";
import DefenceProducts from "../components/DefenceProducts";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";

export default function DefencePage() {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                <DefenceProducts />
                <QuoteForm />
            </main>
            <Footer />
        </>
    );
}
