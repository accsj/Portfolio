import Header from '../../componentes/Header/Header';
import Cards from '../../componentes/ContactComponentes/Cards/Cards';
import FlipCard from '../../componentes/ContactComponentes/FlipCard/FlipCard';
import Footer from '../../componentes/Footer/Footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage () {


    return (
        <>
        <Header />
        <ToastContainer />
        <main className='cards-main'>
            <section className='main-cards'>
                <Cards />
                <FlipCard />
            </section>
        </main>
        <Footer />
        </>
    )
}