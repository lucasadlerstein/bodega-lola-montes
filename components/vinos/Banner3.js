import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import VinosLista from '../../vinos-lista.json';
import Link from 'next/link';

const RowPer = styled(Row)`
    margin: 0 auto;
    justify-content: center!important;
`;

const Franja = styled.div`
    position: absolute;
    content: '';
    background-color: var(--colorAmarillo);
    padding: 3rem 1rem;
    text-transform: uppercase;
    color: white;
    z-index: 999;
    top: 45%;
    opacity: .9!important;
`;

const Banner3 = ({entrada, numero}) => {

    const Vinos = VinosLista.vinos;
    const [cont, setCont] = useState(0);


    return (
        <>
            <Row
                className="mb-5" style={{justifyContent: 'center', position: 'relative'}}
            >
                <Franja
                    className={`animate__animated animate__faster ${(entrada === true) ? 'animate__fadeIn animate__delay-1-5s' : 'animate__fadeOut animate__delay-1-5s'}`}
                >Cotidiano.<br/>Descontracturado. <br/>Ideal para cualquier encuentro.</Franja>

                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Circus">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_1 animate__animated animate__faster ${(entrada === true) ? 'animate__backInRight animate__delay-0s' : 'animate__backOutLeft animate__delay-0-5s'}`} src={`/images/vinos/Circus/Roble/circus_roble_cabernet_sauvignon.png`} alt="Circus Roble - Cabernet Sauvingnon" />
                        </a>
                    </Link>
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Circus">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_2 animate__animated animate__faster ${(entrada === true) ? 'animate__backInRight animate__delay-0-5s' : 'animate__backOutLeft animate__delay-1s'}`} src={`/images/vinos/Circus/Roble/circus_roble_malbec.png`} alt="Circus Roble - Malbec" />
                        </a>
                    </Link>
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Circus">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_3 animate__animated animate__faster ${(entrada === true) ? 'animate__backInRight animate__delay-1s' : 'animate__backOutLeft animate__delay-1-5s'}`} src={`/images/vinos/Circus/Roble/circus_roble_chardonnay.png`} alt="Circus Roble - Chardonnay" />
                        </a>
                    </Link>
                </Col>
            </Row>
        </>
    );

    
}
 
export default Banner3;