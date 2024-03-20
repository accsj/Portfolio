import React from 'react';
import Header from '../../componentes/Header/Header';
import DeveloperAbout from '../../componentes/AboutComponentes/DeveloperAbout/DevAbout';
import SectionRight from '../../componentes/AboutComponentes/SectionRight/SectionRight';
import ButtonCVAbout from '../../componentes/AboutComponentes/ButtonCVAbout/ButtonCVAbout';
import FooterAbout from '../../componentes/Footer/FooterAbout/FooterAbout';



function AboutPage() {

    return (
        <>
        <Header />
        <main className="main-content-about">
            <DeveloperAbout />
            <aside>
                <SectionRight />
                <ButtonCVAbout />
            </aside>
        </main>
        <FooterAbout />
        </>
    );
}

export default AboutPage;
