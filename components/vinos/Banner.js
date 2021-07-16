import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import Link from 'next/link';

const RowPer = styled(Row)`
    margin: 0 auto;
    justify-content: center!important;
`;





const Banner = ({entrada, numero}) => {

    const [mostrarVideo, setMostrarVideo] = useState(false);
    const [ancho, setAncho] = useState(null);

    useEffect(() => {

        setAncho(window.innerWidth);

        setTimeout(() => {
            setMostrarVideo(true);
        }, 2500);

        setTimeout(() => {
            setMostrarVideo(false);
        }, 6000);

        // eslint-disable-next-line
    }, [])

    const VideoFondo = styled.video`
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        max-height: 40.5rem;
        max-width: 100%;
        position: absolute;
        visibility: ${mostrarVideo ? 'block' : 'hidden'};
        /* top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);       */
        /* z-index: -100; */
        /* background-size: cover; */
    transition: all .5s ease;
    `;

    return (
        <>
            <Row
                className="mb-5" style={{justifyContent: 'center', position: 'relative'}}            
            >

                <VideoFondo
                    src={ancho <= 768 ? '/images/EmojiFelizCelular.mp4' : '/images/EmojiFelizParticulas.mp4'}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    playsinline
                /> 

                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Rocky">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_1 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInLeftBig animate__delay-1-5s' : 'animate__fadeOutRightBig animate__delay-0-5s'}`} src={`/images/vinos/Rocky/rocky_malbec.png`} alt="Rocky - Malbec" />
                        </a>
                    </Link>
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Lola%20Montes">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_2 animate__animated animate__faster ${(entrada === true) ?'animate__fadeInLeftBig animate__delay-2s' : 'animate__fadeOutRightBig animate__delay-1s'}`} src={`/images/vinos/Lola/lola_malbec.png`} alt="Lola Montes - Malbec" />
                        </a>
                    </Link>
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Circus">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_3 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInLeftBig animate__delay-2-5s' : 'animate__fadeOutRightBig animate__delay-1-5s'}`} src={`/images/vinos/Circus/Roble/circus_roble_malbec.png`} alt="Circus Roble - Malbec" />

                        </a>
                    </Link>
                </Col>
            </Row>
        </>
    );

    
}
 
export default Banner;