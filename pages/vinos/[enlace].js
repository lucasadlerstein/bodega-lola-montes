import React, {useState} from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import Layout from '../../components/UI/Layout';
import VinosListado from '../../vinos-lista.json';
import {useRouter} from 'next/router';
import CuadradoVino from '../../components/vinos/CuadradoVino.js';
import {withTranslation, i18n} from '../../i18n';

export async function getStaticPaths() {

    const paths = VinosListado.vinos.map( enlace => ({
        params: { enlace: enlace.slug }
    }))

    return { paths, fallback: false }
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

const unVino = ({enlace, t}) => {

    const router = useRouter();
    const [interesar, setInteresar] = useState(0);

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
            padding: 5rem 0;
            color: ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
            white-space: pre-line;
            @media (min-width: 768px){
                padding: 10rem 0;
            }
        `;

        const Titulo = styled.h1`
            font-weight: bold;
            font-size: 4rem;
            border-bottom: 4px solid ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
            text-transform: uppercase;
            width: fit-content;
            position: relative;
            @media (min-width: 768px){
                font-size: 6rem;
            }

            /* &:before {
                content : "";
                position: absolute;
                left    : 0;
                bottom  : 0;
                top: -1rem;
                height  : 5px;
                width   : 3rem;
                border-top: 8px solid ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
            } */
        `;

        const Interesar = styled.h3`
            margin-top: 3rem;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 2.5rem;
            font-size: 3rem;
            @media (min-width: 991px){
                margin-top: 6rem;
            }
        `;

        const Texto = styled.div`
            font-family: 'GothamBook';
            margin: 2rem 0;
            position: relative;
            .pregunta {
                font-family: 'Gotham';
                text-transform: uppercase;
                font-weight: bold;
                padding: 0;
                margin-bottom: .3rem;
            }
            .respuesta {

                /* &:after {
                    content : "";
                    position: absolute;
                    left    : 0;
                    bottom  : 0;
                    top: -1rem;
                    height  : 5px;
                    width   : 2rem;
                    border-bottom: 4px solid ${vinoInfo.uno === 'Circus' ? 'var(--colorChicle);' : 'black' };
                } */
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

        const VerTienda = styled.a`
            color: ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
            cursor: pointer;
            border: 2px solid transparent;
            padding: 1rem 0;
            transition: all .5s ease;
            &:hover {
                color: ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };
                border-bottom: 2px solid ${vinoInfo.uno === 'Lola Montes' ? 'black' : 'white' };

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
                <title>{vinoInfo.uno} {vinoInfo.dos} - {vinoInfo.varietal} | Lola Montes</title>
                <meta name="description" content={ vinoInfo.uno === 'Circus' ? vinoInfo.resena_es.substring(0, 160) : vinoInfo.como_es.substring(0, 150) } />

                <meta name="keywords" content={vinoInfo.keyword} />
            </Head>
            <Layout>
                <Fondo>
                    <Container>
                        <Row>
                            <Col md={8} lg={7}>
                                <Titulo className="animate__animated animate__fadeInLeft">{vinoInfo.uno} {vinoInfo.dos}<br/>{vinoInfo.varietal}</Titulo>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-1s">
                                    {/* <p className="pregunta">{vinoInfo.uno === 'Circus' ? 'Reseña' : '¿Qué es?'}</p> */}
                                    <p>
                                        {
                                            i18n.language === 'es' ? (
                                                vinoInfo.uno === 'Circus' ? vinoInfo.resena_es : vinoInfo.como_es
                                            ) : (
                                                vinoInfo.uno === 'Circus' ? vinoInfo.resena_en : vinoInfo.como_en
                                            )
                                        }
                                    </p>
                                </Texto>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-1-5s">
                                    <p className="pregunta">{vinoInfo.uno === 'Circus' ? t('UnVino.Region') : t('UnVino.ParaQuien')}</p>
                                    <p className="respuesta">
                                    {
                                        i18n.language === 'es' ? (
                                                vinoInfo.uno === 'Circus' ? vinoInfo.region_es : vinoInfo.para_quien_es
                                            ) : (
                                                vinoInfo.uno === 'Circus' ? vinoInfo.region_en : vinoInfo.para_quien_en
                                            )
                                    }
                                    </p>
                                </Texto>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-2s">
                                    <p className="pregunta">{vinoInfo.uno === 'Circus' ? t('UnVino.Guarda') : t('UnVino.ConQue')}</p>
                                    <p className="respuesta">
                                    {
                                        i18n.language === 'es' ? (
                                            vinoInfo.uno === 'Circus' ? vinoInfo.guarda_es : vinoInfo.maridaje_es
                                        ) : (
                                            vinoInfo.uno === 'Circus' ? vinoInfo.guarda_en : vinoInfo.maridaje_en
                                        )
                                    }
                                    
                                    </p>
                                </Texto>
                                <Texto className="animate__animated animate__fadeInLeft animate__delay-2-5s">
                                    <p className="pregunta">{vinoInfo.uno === 'Circus' ? t('UnVino.Color') : t('UnVino.QueMas')}</p>
                                    <p className="respuesta">
                                    {
                                        i18n.language === 'es' ? (
                                            vinoInfo.uno === 'Circus' ? vinoInfo.color_es : vinoInfo.que_mas_es
                                        ) : (
                                            vinoInfo.uno === 'Circus' ? vinoInfo.color_en : vinoInfo.que_mas_en
                                        )
                                    }
                                        
                                    </p>
                                </Texto>
                                {
                                    (vinoInfo.uno === 'Circus') ? (
                                        <>
                                            <Texto className="animate__animated animate__fadeInLeft animate__delay-3s">
                                                <p className="pregunta">{t('UnVino.Nariz')}</p>
                                                <p className="respuesta">
                                                   
                                                {
                                                    i18n.language === 'es' ? (
                                                        vinoInfo.nariz_es
                                                    ) : (
                                                        vinoInfo.nariz_en
                                                    )
                                                }
                                                </p>
                                            </Texto>
                                            <Texto className="animate__animated animate__fadeInLeft animate__delay-3-5s">
                                                <p className="pregunta">{t('UnVino.Paladar')}</p>
                                                <p className="respuesta">
                                                {
                                                    i18n.language === 'es' ? (
                                                        vinoInfo.paladar_es
                                                    ) : (
                                                        vinoInfo.paladar_en
                                                    )
                                                }
                                                </p>
                                            </Texto>
                                            <Texto className="animate__animated animate__fadeInLeft animate__delay-4s">
                                                <p className="pregunta">{t('UnVino.Maridaje')}</p>
                                                <p className="respuesta">
                                                {
                                                    i18n.language === 'es' ? (
                                                        vinoInfo.maridaje_es
                                                    ) : (
                                                        vinoInfo.maridaje_en
                                                    )
                                                }
                                                </p>
                                            </Texto>
                                        </>
                                    ) : null
                                }
                                <VerTienda className="animate__animated animate__fadeInLeft animate__delay-4-5s" target="_blank" href={(vinoInfo.uno === 'Circus') ? 'https://tienda.bodegalolamontes.com/circus-wines/' : (vinoInfo.uno === 'Lola Montes') ? 'https://tienda.bodegalolamontes.com/lola-montes/' : 'https://tienda.bodegalolamontes.com/rocky-wines/'} >{t('Vinos.VerTienda')}</VerTienda>

                            </Col>
                            <Col md={4} lg={5} className="text-center position-relative">
                                {/* <Estampilla className="animate__animated animate__fadeIn animate__delay-4s"
                                src={`images/animaciones/${vinoInfo.uno === 'Circus' ? 'Animación-CIRCUS-quick-time' : vinoInfo.uno === 'Lola Montes' ? 'Animación-LM' : 'Animación-ROCKY'}.gif`}
                                alt={`${vinoInfo.uno} ${vinoInfo.dos}`} /> */}
                                <ImagenVino className="animate__animated animate__fadeInRight animate__delay-1s" src={`/images/vinos/${vinoInfo.imagen}`} alt={`${vinoInfo.uno} ${vinoInfo.dos} - ${vinoInfo.varietal}`} />
                            </Col>
                        </Row>
                        <section className="py-5 animate__animated animate__fadeIn animate__delay-4-5s">
                            <Interesar>{t('UnVino.Interesar')}</Interesar>
                            <Row>
                                {
                                    VinosListado.vinos.map((vino, index) => {
                                        if(
                                            (vinoInfo.slug !== vino.slug) &&
                                            (vinoInfo.varietal == vino.varietal)
                                                ||
                                            ((vinoInfo.varietal == 'White Blend' ||
                                            vinoInfo.varietal == 'Rosé' ||
                                            vinoInfo.varietal == 'Sauvignon Blanc' ||
                                            vinoInfo.varietal == 'Syrah' ||
                                            vinoInfo.varietal == '50% Chenin | 50% Chardonnay' ||
                                            vinoInfo.varietal == 'Chardonnay')
                                            && (vinoInfo.slug !== vino.slug)
                                            && (vino.uno == 'Rocky')) ) {
                                                return (
                                                    <Col key={index} xs={12} md={4} lg={4} className={`animate__animated animate__fadeIn animate__fast animate__delay-1s`}>
                                                        <CuadradoVino titulo={`${vino.uno} ${vino.dos}`} varietal={vino.varietal} imagen={vino.imagen} slug={vino.slug} bodega={vino.uno} />
                                                    </Col>
                                                )
                                        }
                                    })
                                }
                            </Row>
                        </section>
                    </Container>
                </Fondo>
            </Layout>
            </>
        );
    }

}
  
export default withTranslation('vinos')(unVino);