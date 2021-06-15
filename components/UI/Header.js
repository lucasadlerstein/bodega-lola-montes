import React, {useState} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

import {withTranslation, i18n} from '../../i18n';
  
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
 
`;


const Header = ({t}) => {

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
                        <BtnIdioma
                        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                        >{i18n.language === 'en' ? 'ESP' : 'ENG'}</BtnIdioma>
                    </Idiomas>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="text-white" href="/">{t('Header.Inicio')}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" href="/vinos">{t('Header.Vinos')}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" target="_blank" href="https://drive.google.com/drive/u/0/folders/1sQIOrLH3XsfTlqI43bEUQuM_fdSet6hY">{t('Header.Presskit')}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" target="_blank" href="https://tienda.bodegalolamontes.com/contacto">{t('Header.Contacto')}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" target="_blank" href="https://tienda.bodegalolamontes.com">{t('Header.Tienda')}</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className="no-mobile">
                            <Idiomas>
                            <BtnIdioma
                                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                                >{i18n.language === 'en' ? 'ESP' : 'ENG'}</BtnIdioma>
                            </Idiomas>
                        </NavbarText>
                    </Collapse>
                </Navbar>

            </Container>
        </header>
    );
}
 
Header.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  });
  
  export default withTranslation('common')(Header);