import React from 'react';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';

const RowPer = styled(Row)`
    margin: 0 auto;
    justify-content: center!important;
`;

const Banner = ({entrada, numero}) => {

    console.log('entrada ', entrada)

    return (
        <>
            <Row
                className="mb-5" style={{justifyContent: 'center'}}
            >
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <img style={{width: '95%'}} className={`img_banner_vino_1 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInLeftBig animate__delay-3s' : 'animate__fadeOutRightBig animate__delay-1s'}`} src={`/images/vinos/Rocky/rocky_malbec.png`} alt="Rocky - Malbec" />
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <img style={{width: '95%'}} className={`img_banner_vino_2 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInLeftBig animate__delay-4s' : 'animate__fadeOutRightBig animate__delay-2s'}`} src={`/images/vinos/Lola/lola_malbec.png`} alt="Lola Montes - Malbec" />
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <img style={{width: '95%'}} className={`img_banner_vino_3 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInLeftBig animate__delay-5s' : 'animate__fadeOutRightBig animate__delay-3s'}`} src={`/images/vinos/Circus/Roble/circus_roble_malbec.png`} alt="Circus Roble - Malbec" />
                </Col>
            </Row>
        </>
    );

    
}
 
export default Banner;