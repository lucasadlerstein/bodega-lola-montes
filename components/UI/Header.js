import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';

const Idiomas = styled.div`
    display: flex;
    padding: .2rem;
    justify-content: flex-end;
    align-items: center;
    width: 10rem;
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

const Navegacion = styled.ul`
    display: flex;
    justify-content: flex-end;
    padding: 0;
    li {
        text-transform: uppercase;
        padding: 0 2rem;
        a {
            border-bottom: transparent solid white;
            padding-bottom: .5rem; 
            transition: all .5s ease;
    
            &:hover {
                border-bottom: 1px solid white;
            }
        }
        
    }
`;

const Header = () => {
    return (
        <header style={{backgroundColor: 'var(--colorGrisOscuro)'}} >
            <Container>
                <Row>
                    <Col className="text-left">
                        <Link href="/">
                            <a>
                                <img style={{maxHeight: '10rem'}} src="/images/logo_blanco-min.png" alt="Logo Lola Montes"/>
                            </a>
                        </Link>
                    </Col>
                    <Col className="text-right mt-5 mb-5">
                        <Navegacion>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/vinos"><a>Vinos</a></Link></li>
                            <li><a href="https://tienda.bodegalolamontes.com/contacto" target="_blank">Contacto</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com" target="_blank">Tienda</a></li>
                            <li>
                                <Idiomas>
                                    <BtnIdioma style={{color: 'var(--colorChicle)'}} >ESP</BtnIdioma>
                                    <BtnIdioma>ENG</BtnIdioma>
                                </Idiomas>
                            </li>
                        </Navegacion>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
 
export default Header;