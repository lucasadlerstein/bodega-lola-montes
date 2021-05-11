import React from 'react';
import {Row, Col, Container, FormGroup} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';

const Lista = styled.ul`
    padding: 0;
    list-style: none;
    font-family: 'GothamBook';
    li {
        color: white;
    }
    
`;

const Footer = () => {
    return (
        <footer
            style={{backgroundColor: 'var(--colorGrisOscuro)'}}
            className="p-secc text-left"
        >
            <Container>
                <Row className="mobile-text-center">
                    <Col className="mx-auto mb-5" xs={7} sm={7} md={2} lg={2}>
                        <Link href="/">
                            <a>
                                <img src="/images/logo-lolamontes-footer.svg" alt="Bodega Lola Montes" style={{width: '100%'}} />
                            </a>
                        </Link>
                    </Col>
                    <Col xs={6} sm={6} md={2} lg={2}>
                        <Lista>
                            <li><a href="https://tienda.bodegalolamontes.com/" target="_blank">TIENDA</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com/lola-montes/" target="_blank">Gift Shop</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com/como-comprar/" target="_blank">Cómo comprar</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com/aceptacion-de-los-terminos-y-condiciones/" target="_blank">Términos y condiciones</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com/contacto/" target="_blank">Contacto</a></li>
                        </Lista>
                    </Col>
                    <Col xs={6} sm={6} md={2} lg={2}>
                        <Lista>
                            <li><a href="#" target="_blank">LA BODEGA</a></li>
                            <li><a href="#" target="_blank">Lola Montes</a></li>
                            <li><a href="#" target="_blank">Rocky Just Red</a></li>
                            <li><a href="#" target="_blank">Circus Roble</a></li>
                            <li><a href="#" target="_blank">Circus Classic</a></li>
                            <li><a href="#" target="_blank">Recursos</a></li>
                        </Lista>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <Lista>
                            <li><a href="https://tienda.bodegalolamontes.com/contacto/" target="_blank">CONTACTO</a></li>
                            <li><a href="mailto:tienda@bodegalolamontes.com">tienda@bodegalolamontes.com</a></li>
                            <li><a href="#" target="_blank">FB - IG</a></li>
                        </Lista>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <Lista
                            className="text-right mobile-text-center"
                        >
                            <li className="mb-2">Medios de pago</li>
                            <li>
                                <img src="/images/logos-medios-de-pago-min.png" alt="Medios de pago"/>
                            </li>
                        </Lista>
                    </Col>
                </Row>
                <p style={{fontFamily: 'GothamBook'}} className="text-white mt-5 text-center">BEBER CON MODERACIÓN. PROHIBIDA LA VENTA A MENORES DE 18 AÑOS.</p>
            </Container>

        </footer>
    );
}
 
export default Footer;