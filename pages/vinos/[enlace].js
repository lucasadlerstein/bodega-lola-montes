import React from 'react';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import Layout from '../../components/UI/Layout';
import VinosListado from '../../vinos-lista.json';

export async function getStaticPaths() {

    const paths = VinosListado.vinos.map( enlace => ({
        params: { enlace: enlace.slug }
    }))

    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    const { enlace } = params;
    const resultado = VinosListado.vinos.filter(vino => {
        return vino.slug === enlace
    })

    return {
        props: {
            enlace: resultado
        }
    }
}

const unVino = ({enlace}) => {
    const vinoInfo = enlace[0];
    
    const Fondo = styled.main`
        background-color: ${vinoInfo.uno === 'Circus' ? 'var(--colorAzul);' : vinoInfo.uno === 'Lola Montes' ? 'var(--colorAmarillo);' : 'var(--colorChicle);' };
        text-align: left;
        padding: 10rem 0;
        color: ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
    `;

    const Titulo = styled.h1`
        font-weight: bold;
        font-size: 6rem;
        border-bottom: 4px solid ${vinoInfo.uno === 'Circus' ? 'var(--colorChicle);' : 'black' };
        text-transform: uppercase;
        width: fit-content;
        position: relative;

        &:before {
            content : "";
            position: absolute;
            /* left    : .5rem; */
            left    : 0;
            bottom  : 0;
            top: -1rem;
            height  : 5px;
            width   : 3rem;
            border-top: 8px solid ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
        }
    `;

    const Texto = styled.div`
        margin: 2rem 0;
        position: relative;
        .pregunta {
            text-transform: uppercase;
            font-weight: bold;
            padding: 0;
            margin-bottom: .3rem;
        }
        .respuesta {

            &:after {
                content : "";
                position: absolute;
                left    : 0;
                bottom  : 0;
                top: -1rem;
                height  : 5px;
                width   : 2rem;
                border-bottom: 4px solid ${vinoInfo.uno === 'Circus' ? 'var(--colorChicle);' : 'black' };
            }
        }
    `;

    const ImagenVino = styled.img`
        height: 40rem;
        padding-left: 0;
        max-height: 100%;
        transition: all .5s ease;

        @media (min-width: 991px){
            height: 60rem;
                &:hover { 
                padding-left: 2rem;
            }
        }
    `;

    const Estampilla = styled.img`
        content : "";
        position: absolute;
        /* right    : 5rem; */
        right    : 5rem;
        bottom  : 0;
        top: -1rem;
        height  : auto;
        width: 15rem;
    `;

    return (
        <Layout>
            <Fondo>
                <Container>
                    <Row>
                        <Col md={8} lg={7}>
                            <Titulo className="animate__animated animate__fadeInLeft">{vinoInfo.varietal}</Titulo>
                            <Texto className="animate__animated animate__fadeInLeft animate__delay-2s">
                                <p className="pregunta">¿Cómo es?</p>
                                <p className="respuesta" className="border-none">
                                    {vinoInfo.color_es}<br/>
                                    {vinoInfo.nariz_es}<br/>
                                    {vinoInfo.paladar_es}
                                </p>
                            </Texto>
                            <Texto className="animate__animated animate__fadeInLeft animate__delay-3s">
                                <p className="pregunta">¿Para quién?</p>
                                <p className="respuesta">
                                    Esto no es verdad, habria que tener la info de verdad.
                                </p>
                            </Texto>
                            <Texto className="animate__animated animate__fadeInLeft animate__delay-4s">
                                <p className="pregunta">¿Con qué?</p>
                                <p className="respuesta">
                                    {vinoInfo.maridaje_es}
                                </p>
                            </Texto>
                            <Texto className="animate__animated animate__fadeInLeft animate__delay-5s">
                                <p className="pregunta">¿Qué más?</p>
                                <p className="respuesta">
                                    {vinoInfo.guarda_es} de guarda.<br/>
                                    Alc/Vol: No/Se%.<br/>
                                    {vinoInfo.region_es}.
                                </p>
                            </Texto>
                        </Col>
                        <Col md={4} lg={5} className="text-center position-relative">
                            <Estampilla className="animate__animated animate__fadeIn animate__delay-4s" src="/images/animaciones/Animación-CIRCUS-quick-time.gif" alt={`${vinoInfo.uno} ${vinoInfo.dos}`} />
                            <ImagenVino className="animate__animated animate__fadeInRight animate__delay-1s" src={`/images/vinos/${vinoInfo.imagen}`} alt={`${vinoInfo.uno} ${vinoInfo.dos} - ${vinoInfo.varietal}`} />
                        </Col>
                    </Row>
                </Container>
            </Fondo>
        </Layout>
    );
}
 
export default unVino;