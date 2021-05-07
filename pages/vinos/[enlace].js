import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import Layout from '../../components/UI/Layout';
import VinosListado from '../../vinos-lista.json';
import {useRouter} from 'next/router';

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

    const router = useRouter();

    if (router.isFallback) {
        return (
            <Layout>
                <div style={{textAlign: 'center'}} className="py-5 my-5 mb-0">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </Layout>
        )
    }

    if(enlace == undefined || enlace == null) {
        router.push('/vinos');
    } else {

        const vinoInfo = enlace[0];
    
        const Fondo = styled.main`
            background-color: ${vinoInfo.uno === 'Circus' ? 'var(--colorAzul);' : vinoInfo.uno === 'Lola Montes' ? 'var(--colorAmarillo);' : 'var(--colorChicle);' };
            text-align: left;
            padding: 10rem 0;
            color: ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
            white-space: pre-line;
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
            font-family: 'GothamBook';
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
            max-height: 40rem;
            padding-left: 0;
            max-height: 100%;
            transition: all .5s ease;

            @media (min-width: 991px){
                max-height: 60rem;
                    &:hover { 
                    padding-left: 2rem;
                }
            }
        `;

        const Estampilla = styled.img`
            @media (max-width: 768px){
                display: none;
            }
            @media (min-width: 768px){
                content : "";
                position: absolute;
                /* right    : 5rem; */
                right    : 5rem;
                bottom  : 0;
                top: -1rem;
                height  : auto;
                width: 15rem;
            }
        `;

        return (
            <>
            <Head>
                <title>{vinoInfo.uno} {vinoInfo.dos} - {vinoInfo.varietal} | Bodega Lola Montes</title>
                <meta name="description" content={ vinoInfo.uno === 'Circus' ? vinoInfo.resena_es.substring(0, 160) : vinoInfo.como_es.substring(0, 150) } />

                <meta name="keywords" content={`${vinoInfo.uno}, ${vinoInfo.dos}, ${vinoInfo.varietal}, lola montes, ${vinoInfo.region_es}`} />
            </Head>
            <Layout>
                <Fondo>
                    <Container>
                        <Row>
                            <Col md={8} lg={7}>
                                <Titulo className="animate__animated animate__fadeInLeft">{vinoInfo.varietal}</Titulo>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-2s">
                                    <p className="pregunta">{vinoInfo.uno === 'Circus' ? 'Reseña' : '¿Qué es?'}</p>
                                    <p>
                                        {vinoInfo.uno === 'Circus' ? vinoInfo.resena_es : vinoInfo.como_es}
                                    </p>
                                </Texto>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-3s">
                                    <p className="pregunta">{vinoInfo.uno === 'Circus' ? 'Región de viñedos' : '¿Para quién es?'}</p>
                                    <p className="respuesta">
                                        {vinoInfo.uno === 'Circus' ? vinoInfo.region_es : vinoInfo.para_quien_es}
                                    </p>
                                </Texto>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-4s">
                                    <p className="pregunta">{vinoInfo.uno === 'Circus' ? 'Guarda' : '¿Con qué?'}</p>
                                    <p className="respuesta">
                                    {vinoInfo.uno === 'Circus' ? vinoInfo.guarda_es : vinoInfo.maridaje_es}
                                    </p>
                                </Texto>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-5s">
                                    <p className="pregunta">{vinoInfo.uno === 'Circus' ? 'Color' : '¿Qué más?'}</p>
                                    <p className="respuesta">
                                        {vinoInfo.uno === 'Circus' ? vinoInfo.color_es : vinoInfo.que_mas_es}
                                    </p>
                                </Texto>
                                {
                                    (vinoInfo.uno === 'Circus') ? (
                                        <>
                                            <Texto className="animate__animated animate__fadeInLeft animate__delay-6s">
                                                <p className="pregunta">Nariz</p>
                                                <p className="respuesta">
                                                   {vinoInfo.nariz_es}
                                                </p>
                                            </Texto>
                                            <Texto className="animate__animated animate__fadeInLeft animate__delay-7s">
                                                <p className="pregunta">Paladar</p>
                                                <p className="respuesta">
                                                   {vinoInfo.paladar_es}
                                                </p>
                                            </Texto>
                                            <Texto className="animate__animated animate__fadeInLeft animate__delay-8s">
                                                <p className="pregunta">Maridaje</p>
                                                <p className="respuesta">
                                                   {vinoInfo.maridaje_es}
                                                </p>
                                            </Texto>
                                        </>
                                    ) : null
                                }
                            </Col>
                            <Col md={4} lg={5} className="text-center position-relative">
                                <Estampilla className="animate__animated animate__fadeIn animate__delay-4s" src="/images/animaciones/Animación-CIRCUS-quick-time.gif" alt={`${vinoInfo.uno} ${vinoInfo.dos}`} />
                                <ImagenVino className="animate__animated animate__fadeInRight animate__delay-1s" src={`/images/vinos/${vinoInfo.imagen}`} alt={`${vinoInfo.uno} ${vinoInfo.dos} - ${vinoInfo.varietal}`} />
                            </Col>
                        </Row>
                    </Container>
                </Fondo>
            </Layout>
            </>
        );
    }

}
 
export default unVino;