import React, {useState} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Collapse, Row, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Idiomas = styled.div`
    display: flex;
    padding: .5rem;
    justify-content: flex-end;
    align-items: flex-end;
    width: 12rem;
    @media (max-width: 540px){
        margin: 0 auto;
    }

`;

const BtnIdioma = styled.button`
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    padding: 0 1rem;
    background-color: transparent;
    letter-spacing: normal;
    border: none;
    transition: all .5s ease;
    &:hover {
        letter-spacing: .3rem;
    }
    &:focus {
        outline: none;
    }
    &:first-of-type {
        border-right: 3px solid var(--colorChicle);
    }
`;


const Header = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
        <header style={{backgroundColor: 'var(--colorGrisOscuro)', fontFamily: 'GothamBook'}} >
            <Container>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img style={{maxHeight: '10rem'}} src="/images/logo_blanco-min.png" alt="Logo Lola Montes"/>
                        </a>
                    </Link>
                    <Idiomas className="no-desktop">
                        <BtnIdioma style={{color: 'var(--colorChicle)'}} >ESP</BtnIdioma>
                        <BtnIdioma>ENG</BtnIdioma>
                    </Idiomas>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacionMenu" aria-controls="navegacionMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navegacionMenu">
                        <div className="navbar-nav">
                            <Link href="/"><a className="nav-item nav-link">Home</a></Link>
                            <Link href="/vinos"><a className="nav-item nav-link">Vinos</a></Link>
                            <a className="nav-item nav-link" href="#">Presskit</a>
                            <a className="nav-item nav-link" href="https://tienda.bodegalolamontes.com/contacto" target="_blank">Contacto</a>
                            <a className="nav-item nav-link" href="https://tienda.bodegalolamontes.com" target="_blank">Tienda</a>
                            
                        </div>
                    </div>
                    <Idiomas className="no-mobile">
                        <BtnIdioma style={{color: 'var(--colorChicle)'}} >ESP</BtnIdioma>
                        <BtnIdioma>ENG</BtnIdioma>
                    </Idiomas>
                </nav>
            </Container>
        </header>
    );
}
 
export default Header;