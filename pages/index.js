import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import Footer from '../components/UI/Footer';
import Link from 'next/link';
import Banner from '../components/vinos/Banner';

const Titulo = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Cual = styled.p`
  font-size: 2rem;
`;

const QuieroConocer = styled.a`
  background-color: black;
  color: white;
  padding: .8rem 2.5rem;
  text-transform: uppercase;
  margin-top: 3rem;
  transition: all .3s ease;
  &:hover { 
    cursor: pointer;
    padding: .8rem 3rem;
  }
`;

const Idiomas = styled.div`
    border: 2px solid black;
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
  img {
    max-height: 15rem; 
  }
`;

const Index = () => {

  return (
    <>
      <Container className="mb-5">
        <Row
            style={{alignItems: 'center'}}
        >
            <Col className="text-right">
                <img style={{maxHeight: '3rem'}} src="images/menu-button.png" alt="Boton de Menú"/>
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
        <p className="animate__animated animate__fadeIn animate__delay-1s">Elaboramos vinos con uvas seleccionadas de nuestros viñedos de Agrelo, Mendoza.</p>
        <Cual className="animate__animated animate__fadeIn animate__delay-2s">¿Cuál vas a elegir hoy?</Cual>
        <IconosAnimados className="animate__animated animate__fadeIn animate__delay-6s">
          <img className="animate__animated animate__fadeIn animate__delay-6s" src="/images/animaciones/Animación-HOME.gif" alt="Bodega Lola Montes" />
          <img className="animate__animated animate__fadeIn animate__delay-6s" src="/images/animaciones/Animación-HOME-CINTA.gif" alt="Be Kind, Drink Wine" />
        </IconosAnimados>

        <Banner />
        
        <Link href="/vinos">
          <QuieroConocer className="animate__animated animate__faster animate__fadeInLeft animate__delay-7s">Quiero conocer todos los vinos</QuieroConocer>
        </Link>

      </Container>
      <Footer />
    </>
  );
}
 
export default Index;