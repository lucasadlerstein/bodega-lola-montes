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
    &:first-of-type {
        border-right: 3px solid var(--colorChicle);
    }
`;

const IconosAnimados = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
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

const Index = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [bannerNumber, setBannerNumber] = useState(1);
  const [mostrarBanner, setMostrarBanner] = useState(true);
  const [entrada, setEntrada] = useState(true);

  const cambiarBanner = (cual) => {
    setEntrada(false);
    let randomN = bannerNumber;
    
    while(randomN === bannerNumber || randomN === 1) {
      randomN = Math.floor(Math.random() * (4)) + 1;
    }
  
    setTimeout(() => {
      setEntrada(true);
      setBannerNumber(randomN);
      // if(cual === 'atras') {
      //   if(bannerNumber === 0) {
      //     setBannerNumber(4);
      //   } else {
      //     setBannerNumber(bannerNumber - 1);
      //   }
      // } else {
      //   if(bannerNumber === 4) {
      //     setBannerNumber(0);
      //   } else {
      //     setBannerNumber(bannerNumber + 1);
      //   }
      // }
    }, 3500);
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <title>Lola Montes</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
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
                                <NavLink style={{color: 'black'}} className="nav-link-inicio" href="/vinos">Vinos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color: 'black'}} className="nav-link-inicio" target="_blank" href="https://tienda.bodegalolamontes.com/contacto">Contacto</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color: 'black'}} className="nav-link-inicio" target="_blank" href="https://tienda.bodegalolamontes.com">Tienda</NavLink>
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
                    <BtnIdioma style={{color: 'var(--colorChicle)'}} >ESP</BtnIdioma>
                    <BtnIdioma>ENG</BtnIdioma>
                </Idiomas>
            </Col>
        </Row>
        <Titulo className="animate__animated animate__fadeIn">Bienvenido al mundo<br/>Lola Montes</Titulo>
        <p style={{fontFamily: 'GothamBook'}} className="animate__animated animate__fadeIn animate__delay-1s">Elaboramos vinos con uvas seleccionadas de nuestros viñedos de Agrelo, Mendoza.</p>
        <Cual className="animate__animated animate__fadeIn animate__delay-2s mb-0">¿Cuál vas a elegir hoy?</Cual>

        <IconosAnimados className="animate__animated animate__fadeIn animate__delay-6s">
          <IconoIzquierda className="animate__animated animate__fadeIn animate__delay-6s" src="/images/animaciones/Animación-HOME.gif" alt="Bodega Lola Montes" />
          <IconoDerecha className="animate__animated animate__fadeIn animate__delay-6s" src="/images/animaciones/Animación-HOME-CINTA.gif" alt="Be Kind, Drink Wine" />
        </IconosAnimados>

        <div style={{position: 'relative', zIndex: '999'}} className="animate__animated animate__fadeIn animate__delay-6s">
          <BtnIzquierda onClick={() => cambiarBanner('atras')} className="animate__animated">
            <img src="/images/arrow_izq.png" alt="Retroceder" />
          </BtnIzquierda>
          <BtnDerecha onClick={() => cambiarBanner('adelante')} className="animate__animated">
            <img src="/images/arrow_der.png" alt="Retroceder" />
          </BtnDerecha>
        </div>

        {
          (bannerNumber == 1) ?  <Banner entrada={entrada} numero={bannerNumber} /> : 
          (bannerNumber == 2) ?  <Banner2 entrada={entrada} numero={bannerNumber} /> :
          (bannerNumber == 3) ?  <Banner3 entrada={entrada} numero={bannerNumber} /> :
          (bannerNumber == 4) ?  <Banner4 entrada={entrada} numero={bannerNumber} /> :
          // (bannerNumber == 5) ?  <Banner5 entrada={entrada} numero={bannerNumber} /> :
          null
        }
        
        <Link href="/vinos">
          <QuieroConocer className="text-center animate__animated animate__faster animate__fadeInLeft animate__delay-7s">Quiero conocer<br/>todos los vinos</QuieroConocer>
        </Link>

      </Container>
      <Footer />
    </>
  );
}
 
export default Index;