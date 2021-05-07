import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from '@emotion/styled';

const CarouselPersonalizado = styled(Carousel)`
    .carousel .slide {
        background-color: transparent;
    }
`;

const ImagenVino = styled.img`
    max-width: 20%;
`;


const Banner = () => {
    return (
        <>
            {/* <CarouselPersonalizado
                showStatus={false}
                showIndicators={false}
                stopOnHover={true} swipeable={true} interval={3000} infiniteLoop={true} showThumbs={false} autoPlay={true} transitionTime={4000} emulateTouch={true}> */}
                    <div className="mb-5" style={{display: 'flex', justifyContent: 'center'}} >
                        <ImagenVino className="animate__animated animate__faster animate__fadeInLeft animate__delay-3s" src="/images/vinos/Rocky/rocky_cabernet_sauvignon.png" alt="Rocky - Cabernet Sauvignon" />
                        <ImagenVino className="animate__animated animate__faster animate__fadeInLeft animate__delay-4s" src="/images/vinos/Rocky/rocky_cabernet_sauvignon.png" alt="Rocky - Cabernet Sauvignon" />
                        <ImagenVino className="animate__animated animate__faster animate__fadeInLeft animate__delay-5s" src="/images/vinos/Rocky/rocky_cabernet_sauvignon.png" alt="Rocky - Cabernet Sauvignon" />
                    </div>
            {/* </CarouselPersonalizado> */}


        </>
    );
}
 
export default Banner;