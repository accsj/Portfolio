import React from 'react';
import Header from '../../componentes/Header/Header';
import SectionLeft from '../../componentes/HomeComponentes/SectionLeft/SectionLeft';
import DeveloperImage from '../../componentes/HomeComponentes/Developer/Dev';
import Footer from '../../componentes/Footer/Footer';



function HomePage() {

    return (
        <>
        <Header ClassName='cabecalho'/>
            <main className='main-content'>
                <SectionLeft />
            <aside className='right-content'>
                <DeveloperImage />
            </aside>
            </main>
        <Footer />
        </>
    );
}

export default HomePage;
