import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import VinosLista from '../../vinos-lista.json';

const RowPer = styled(Row)`
    margin: 0 auto;
    justify-content: center!important;
`;

const Banner2 = ({entrada, numero}) => {


    return (
        <>
            <Row
                className="mb-5" style={{justifyContent: 'center'}}
            >
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <img style={{width: '95%'}} className={`img_banner_vino_1 animate__animated animate__faster ${(entrada === true) ? 'animate__rollIn' : 'animate__rollOut animate__delay-1s'}`} src={`/images/vinos/Rocky/rocky_cabernet_sauvignon.png`} alt="Rocky - Cabernet Sauvingnon" />
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <img style={{width: '95%'}} className={`img_banner_vino_2 animate__animated animate__faster ${(entrada === true) ? 'animate__rollIn animate__delay-1s' : 'animate__rollOut animate__delay-2s'}`} src={`/images/vinos/Rocky/rocky_malbec.png`} alt="Rocky - Malbec" />
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <img style={{width: '95%'}} className={`img_banner_vino_3 animate__animated animate__faster ${(entrada === true) ? 'animate__rollIn animate__delay-2s' : 'animate__rollOut animate__delay-3s'}`} src={`/images/vinos/Rocky/rocky_red_blend.png`} alt="Rocky - Red Blend" />
                </Col>
            </Row>
        </>
    );

    
}
 
export default Banner2;