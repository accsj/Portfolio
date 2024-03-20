import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="cabecalho">
            <div className="tabs-left">
                <NavLink className="portfolio" to="/">Portfolio</NavLink>
            </div>
            <nav className="nav" id="nav">
                <div className={`navbar ${isMenuOpen ? 'change' : ''}`} id="navbar" onClick={toggleMenu}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <div className={`tabsright ${isMenuOpen ? 'show' : ''}`} id="tabsright">
                    <NavLink className='' to="/" activeClassName="active">Home</NavLink>
                    <NavLink className='' to="/projetos" activeClassName="active">Projetos</NavLink>
                    <NavLink className='' to="/sobre" activeClassName="active">Sobre</NavLink>
                    <NavLink className='' to="/contatos" activeClassName="active">Contato</NavLink>
                </div>
            </nav>
        </header>
    );
}
