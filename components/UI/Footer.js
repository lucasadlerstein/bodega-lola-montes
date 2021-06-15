import React from 'react';
import {Row, Col, Container, FormGroup} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import {withTranslation} from '../../i18n';

const Lista = styled.ul`
    padding: 0;
    list-style: none;
    font-family: 'GothamBook';
    li {
        color: white;
    }
    
`;

const Footer = ({t}) => {
    return (
        <footer
            style={{backgroundColor: 'var(--colorGrisOscuro)', fontSize: '1.4rem'}}
            className="py-5 text-left"
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
                            <li><a href="https://tienda.bodegalolamontes.com/" target="_blank">{t('Footer.Tienda')}</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com/como-comprar/" target="_blank">{t('Footer.ComoComprar')}</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com/aceptacion-de-los-terminos-y-condiciones/" target="_blank">{t('Footer.TYC')}</a></li>
                            <li><a href="https://tienda.bodegalolamontes.com/contacto/" target="_blank">{t('Footer.Contacto')}</a></li>
                        </Lista>
                    </Col>
                    <Col xs={6} sm={6} md={2} lg={2}>
                        <Lista>
                            <li><a href="#" target="_blank">{t('Footer.Bodega')}</a></li>
                            <li><a href="#" target="_blank">Lola Montes</a></li>
                            <li><a href="#" target="_blank">Rocky Just Red</a></li>
                            <li><a href="#" target="_blank">Circus Roble</a></li>
                            <li><a href="#" target="_blank">Circus Classic</a></li>
                            <li><a href="#" target="_blank">{t('Footer.Recursos')}</a></li>
                        </Lista>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <Lista>
                            <li><a href="https://tienda.bodegalolamontes.com/contacto/" target="_blank">{t('Footer.Contacto')}</a></li>
                            <li><a href="mailto:tienda@bodegalolamontes.com">tienda@bodegalolamontes.com</a></li>
                            <li className="mt-2">
                                <a href="https://www.facebook.com/lolamonteswines" className="mr-3" target="_blank"><img style={{height: '2rem'}} src="/images/facebook.png" alt="Facebook - Bodega Lola Montes" /></a>
                                <a href="https://www.instagram.com/lolamwines/" target="_blank"><img style={{height: '2rem'}} src="/images/instagram.png" alt="Instagram - Bodega Lola Montes" /></a>
                            </li>
                        </Lista>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <Lista
                            className="text-right mobile-text-center"
                        >
                            <li className="mb-2">{t('Footer.MediosPago')}</li>
                            <li>
                                <img src="/images/logos-medios-de-pago-min.png" alt="Medios de pago"/>
                            </li>
                        </Lista>
                    </Col>
                </Row>
                <p style={{fontFamily: 'GothamBook'}} className="text-white mt-3 text-center">{t('Footer.Moderacion')}</p>
            </Container>

        </footer>
    );
}
 
 
Footer.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  });
  
  export default withTranslation('common')(Footer);