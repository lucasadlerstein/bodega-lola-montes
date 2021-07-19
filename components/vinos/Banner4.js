import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import VinosLista from '../../vinos-lista.json';
import Link from 'next/link';
import { withTranslation } from '../../i18n';

const RowPer = styled(Row)`
    margin: 0 auto;
    justify-content: center!important;
`;

const Banner4 = ({entrada, numero, t}) => {

    const Vinos = VinosLista.vinos;
    const [cont, setCont] = useState(0);


    return (
        <>
            <Row
                className="mb-5" style={{justifyContent: 'center', position: 'relative'}}
                >
                <div className={`franja bg-amarillo top-lola animate__animated animate__faster ${(entrada === true) ? 'animate__fadeIn animate__delay-1-5s' : 'animate__fadeOut animate__delay-1-5s'}`}
                    >{t('TextosBanner.LolaP.Uno')}<br/>{t('TextosBanner.LolaP.Dos')}</div>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Lola%20Montes">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_1 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInUpBig animate__delay-0s' : 'animate__fadeOutUpBig animate__delay-0-5s'}`} src={`/images/vinos/Lola/lola_cabernet.png`} alt="Lola Montes - Cabernet Sauvingnon" />
                        </a>
                    </Link>
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Lola%20Montes">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_2 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInUpBig animate__delay-0-5s' : 'animate__fadeOutUpBig animate__delay-1s'}`} src={`/images/vinos/Lola/lola_malbec.png`} alt="Lola Montes - Malbec" />
                        </a>
                    </Link>
                </Col>
                <Col xs={4} sm={4} lg={3} className="p-0">
                    <Link href="/vinos?linea=Lola%20Montes">
                        <a>
                            <img style={{width: '95%'}} className={`img_banner_vino_3 animate__animated animate__faster ${(entrada === true) ? 'animate__fadeInUpBig animate__delay-1s' : 'animate__fadeOutUpBig animate__delay-1-5s'}`} src={`/images/vinos/Lola/lola_red_blend.png`} alt="Lola Montes - Red Blend" />
                        </a>
                    </Link>
                </Col>
            </Row>
        </>
    );

    
}
 
export default withTranslation('inicio')(Banner4);