import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import {Row, Col} from 'reactstrap';
import VinosLista from '../../vinos-lista.json';

const RowPer = styled(Row)`
    margin: 0 auto;
    justify-content: center!important;
`;

const ImagenVino = styled.img`
    max-width: 22rem;
`;

const Banner = () => {

    const Vinos = VinosLista.vinos;
    const [cont, setCont] = useState(0);


    return (
        <>
            <div className="mb-5" style={{display: 'flex', justifyContent: 'center'}} >
                <ImagenVino className="animate__animated animate__faster animate__fadeInLeft animate__delay-3s" src={`/images/vinos/${Vinos[cont].imagen}`} alt={`${Vinos[cont].uno} ${Vinos[cont].dos} - ${Vinos[cont].varietal}`} />
                <ImagenVino className="animate__animated animate__faster animate__fadeInLeft animate__delay-4s" src={`/images/vinos/${Vinos[cont+1].imagen}`} alt={`${Vinos[cont].uno} ${Vinos[cont].dos} - ${Vinos[cont].varietal}`} />
                <ImagenVino className="animate__animated animate__faster animate__fadeInLeft animate__delay-5s" src={`/images/vinos/${Vinos[cont+2].imagen}`} alt={`${Vinos[cont].uno} ${Vinos[cont].dos} - ${Vinos[cont].varietal}`} />
            </div>
        </>
    );

    
}
 
export default Banner;