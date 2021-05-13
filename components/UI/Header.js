import React, {useState} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
  
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

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <header style={{backgroundColor: 'var(--colorGrisOscuro)', fontFamily: 'GothamBook'}} >
            <Container>
                <Navbar color="" dark expand="md">
                    <NavbarBrand href="/">
                        <img style={{maxHeight: '10rem'}} src="/images/logo_blanco-min.png" alt="Logo Lola Montes"/>
                    </NavbarBrand>
                    <Idiomas className="no-desktop">
                        <BtnIdioma style={{color: 'var(--colorChicle)'}} >ESP</BtnIdioma>
                        <BtnIdioma>ENG</BtnIdioma>
                    </Idiomas>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="text-white" href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" href="/vinos">Vinos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" target="_blank" href="/vinos">Presskit</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" target="_blank" href="https://tienda.bodegalolamontes.com/contacto">Contacto</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" target="_blank" href="https://tienda.bodegalolamontes.com">Tienda</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className="no-mobile">
                            <Idiomas>
                                <BtnIdioma style={{color: 'var(--colorChicle)'}} >ESP</BtnIdioma>
                                <BtnIdioma>ENG</BtnIdioma>
                            </Idiomas>
                        </NavbarText>
                    </Collapse>
                </Navbar>

            </Container>
        </header>
    );
}
 
export default Header;