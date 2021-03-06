import React, {useState} from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Footer from '../components/UI/Footer';
import Link from 'next/link';
import Banner from '../components/vinos/Banner';
import Banner2 from '../components/vinos/Banner2';
import Banner3 from '../components/vinos/Banner3';
import Banner4 from '../components/vinos/Banner4';
import Banner5 from '../components/vinos/Banner5';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { withTranslation, i18n } from '../i18n';
// import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router'

const Titulo = styled.h1`
  font-size: 4.5rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 1rem;
  @media (max-width: 540px){
    font-size: 2.5rem;
    margin-top: 2rem;
  }
`;

const Cual = styled.p`
  font-size: 2rem;
`;

const QuieroConocer = styled.a`
  background-color: black;
  color: white;
  padding: .8rem 2.5rem;
  text-transform: uppercase;
  transition: all .3s ease;
  font-weight: bold;
  display: block;
  margin: 3rem auto;
  @media (min-width: 768px){
    max-width: 25rem;
  }
  
  &:hover { 
    cursor: pointer;
    color: var(--colorRosa);
  }
`;

const Idiomas = styled.div`
    /* border: 2px solid black; */
    padding: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 12rem;
`;

const BtnIdioma = styled.button`
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 .5rem;
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

const IconosAnimados = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 150;
  @media (max-width: 768px){
    display: none;
  }
  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const IconoIzquierda = styled.img`
  top: -4rem;
  left: 8rem;
  width: 12rem;
  @media (max-width: 991px){
    left: -2rem;
  }
`;

const IconoDerecha = styled.img`
  top: -4rem;
  left: 88rem;
  width: 12rem;
`;

const BtnArrow = styled.button`
  background-color: transparent;
  border: none;
  width: 7rem;
  position: absolute;
  content: "";
  top: 8.5rem;
  &:hover {
    -webkit-animation-name: flash;
    animation-name: flash;
  }
  @media (min-width: 450px){
    top: 10rem;
  }
  @media (min-width: 500px){
    top: 12rem;
  }
  @media (min-width: 600px){
    top: 14rem;
  }
  @media (min-width: 768px){
    top: 18rem;
  }
`;

const BtnIzquierda = styled(BtnArrow)`
    left: -1rem;
    @media (min-width: 600px){
      left: -5rem;
    }
    @media (min-width: 768px){
      left: 0;
    }
`;

const BtnDerecha = styled(BtnArrow)`
  right: -1rem;
  @media (min-width: 600px){
    right: -5rem;
  }
  @media (min-width: 768px){
    right: 0;
  }
`;

const InfoFranja = styled.p`
  margin-bottom: 0!important;
  b {
    font-size: 2rem;
    margin-bottom: 1rem!important;
    font-weight: bold!important;
  }
`;

const Index = ({t}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [bannerNumber, setBannerNumber] = useState(1);
  const [mostrarBanner, setMostrarBanner] = useState(true);
  const [entrada, setEntrada] = useState(true);

  const FranjaAbajo = styled.div`
    background-color: ${bannerNumber === 1 ? 'transparent' : (bannerNumber === 3) ? 'var(--colorAzul)' : (bannerNumber === 2) ? 'var(--colorAmarillo);' : 'var(--colorChicle);'};
    color: ${bannerNumber === 3 ? 'white' : (bannerNumber === 2) ? 'black' : 'black'};
    text-align: center;
    padding: 3rem 0 3rem 0;
    transition: all .5s ease;
    visibility: ${bannerNumber === 1 ? 'hidden' : 'block'};
  `;

  const cambiarBanner = (cual) => {

    if(bannerNumber === 4 && cual === 'adelante') {
      setBannerNumber(2);
    } else if (bannerNumber === 2 && cual === 'atras') {
      setBannerNumber(4);
    } else if (cual === 'atras') {
      setBannerNumber(bannerNumber - 1);
    } else if (cual === 'adelante') {
      setBannerNumber(bannerNumber + 1);
    }


    // RANDOM

    // // setEntrada(false);
    // let randomN = bannerNumber;
    // while(randomN === bannerNumber || randomN === 1) {
      // randomN = Math.floor(Math.random() * (4)) + 1;
    // }
    // setBannerNumber(randomN);
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <title>{t('SEO.Titulo')}</title>
        <meta name="description" content={t('SEO.Descripcion')} />
        <meta name="keywords" content={t('SEO.Keywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon"/>

      </Head>
      <Container className="mb-5">
        <Row
            style={{alignItems: 'center'}}
        >
            <Col className="text-right">
              <Navbar light style={{color: 'black', justifyContent: 'flex-end'}} >
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className={`ml-auto ${isOpen ? 'borde-menu' : ''}`} navbar>
                            <NavItem>
                                <Link href="/vinos">
                                  <NavLink style={{color: 'black'}} className="nav-link-inicio">{t('Header.Vinos')}</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color: 'black'}} className="nav-link-inicio" target="_blank" href="https://tienda.bodegalolamontes.com/contacto">{t('Header.Contacto')}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color: 'black'}} className="nav-link-inicio" target="_blank" href="https://tienda.bodegalolamontes.com">{t('Header.Tienda')}</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Col>
            <Col className="text-center">
                <img style={{maxHeight: '15rem'}} src="images/logo_negro-min.png" alt="Logo - Bodega Lola Montes"/>
            </Col>
            <Col>
                <Idiomas>
                    <BtnIdioma
                      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                    >{i18n.language === 'en' ? 'ESP' : 'ENG'}</BtnIdioma>
                    
                </Idiomas>
            </Col>
        </Row>
        <Titulo className="animate__animated animate__fadeIn">{t('Titulo')}<br/>
        {i18n.language === 'en' ? 'of ' : ''} Lola Montes</Titulo>
        <p style={{fontFamily: 'GothamBook'}} className="animate__animated animate__fadeIn animate__delay-0-5s">{t('Subtitulo')}</p>
        <Cual className="animate__animated animate__fadeIn animate__delay-1s mb-0">{t('Cual')}</Cual>

        <IconosAnimados className="animate__animated animate__fadeIn animate__delay-3s">
          <IconoIzquierda className="animate__animated animate__fadeIn animate__delay-3s" src="images/animaciones/Animaci??n-HOME.gif" alt="Bodega Lola Montes" />
          {/* <IconoDerecha className="animate__animated animate__fadeIn animate__delay-3s" src="images/animaciones/Animaci??n-HOME-CINTA.gif" alt="Be Kind, Drink Wine" /> */}
        </IconosAnimados>

        <div style={{position: 'relative', zIndex: '999'}} className="animate__animated animate__fadeIn animate__delay-3-5s">
          <BtnIzquierda onClick={() => cambiarBanner('atras')} className="animate__animated">
            <img src="images/arrow_izq.png" alt="Retroceder" />
          </BtnIzquierda>
          <BtnDerecha onClick={() => cambiarBanner('adelante')} className="animate__animated">
            <img src="images/arrow_der.png" alt="Retroceder" />
          </BtnDerecha>
        </div>

        {
          (bannerNumber == 1) ?  <Banner entrada={entrada} numero={bannerNumber} /> : 
          (bannerNumber == 2) ?  <Banner4 entrada={entrada} numero={bannerNumber} /> :
          (bannerNumber == 3) ?  <Banner3 entrada={entrada} numero={bannerNumber} /> :
          (bannerNumber == 4) ?  <Banner2 entrada={entrada} numero={bannerNumber} /> :
          // (bannerNumber == 5) ?  <Banner5 entrada={entrada} numero={bannerNumber} /> :
          null
        }

        {/* <p style={{fontFamily: 'GothamBook'}} className="animate__animated animate__fadeIn animate__delay-4-5s">
          {
            (bannerNumber == 1) ?  t('TextosBanner.Todos') : 
            (bannerNumber == 2) ?  t('TextosBanner.Rocky') :
            (bannerNumber == 3) ?  t('TextosBanner.Circus') :
            (bannerNumber == 4) ?  t('TextosBanner.Lola') :
            // (bannerNumber == 5) ?  <Banner5 entrada={entrada} numero={bannerNumber} /> :
            null
          }
        </p> */}
        
        <Link href="/vinos">
          <QuieroConocer className="text-center animate__animated animate__faster animate__fadeInLeft animate__delay-4-5s">{t('BtnConocer.01')}<br/>{t('BtnConocer.02')}</QuieroConocer>
        </Link>

      </Container>
      <FranjaAbajo>
        {
          (bannerNumber === 2) ? (
            <InfoFranja><b className="mb-5">LOLA MONTES</b> <br /> {t('TextosBanner.LolaP.Uno')} <br /> {t('TextosBanner.LolaP.Dos')}  </InfoFranja>
          ) : (bannerNumber === 3) ? (
            <InfoFranja> <b className="mb-5">CIRCUS</b> <br /> {t('TextosBanner.CircusP.Uno')} <br /> {t('TextosBanner.CircusP.Dos')} <br /> {t('TextosBanner.CircusP.Tres')} </InfoFranja>
          ) : (bannerNumber === 4) ? (
            <InfoFranja> <b className="mb-5">ROCKY ROBLE</b> <br /> {t('TextosBanner.RockyP.Uno')} <br /> {t('TextosBanner.RockyP.Dos')}</InfoFranja>
          ) : null
        }
      </FranjaAbajo>
      <Footer />
    </>
  );
}
 
Index.getInitialProps = async () => ({
  namespacesRequired: ['inicio'],
});

export default withTranslation('inicio')(Index);