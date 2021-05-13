import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const CuadradoVino = ({titulo, imagen, varietal, slug, bodega}) => {


    const Cuadrado = styled.div`
        background-color: var(--colorBeige);
        width: 100%;
        padding: 2rem 0;
        text-align: center;
        margin: 1.5rem 0; 
        transition: all .3s ease;
        img {
            height: 30rem;
            transition: all .5s ease;
            padding-left: 0;
            &:hover {
                padding-left: 2rem;
            }
        }
        &:hover {
            background-color: ${bodega === 'Circus' ? 'var(--colorAzul)' : (bodega === 'Lola Montes') ? 'var(--colorAmarillo);' : 'var(--colorChicle);'};
            color: ${bodega === 'Circus' ? 'white' : 'black'};
        }
    `;

    const Bodega = styled.p`
        text-transform: uppercase;
        font-weight: bold;
        margin: .5rem 0;
    `;

    const Varietal = styled.p`

    `;

    const VerMas = styled.a`
        background-color: black;
        color: white;
        display: block;
        width: 12rem;
        margin: 0 auto;
        border-radius: .5rem;
        border: none;
        padding: .35rem;
        transition: all .5s ease;
        &:hover {
            width: 13rem;
            cursor: pointer;
        }
    `;
    
    return (
        <Cuadrado>
            <Link href={`/vinos/${slug}`}>
                <a>
                    <img src={`/images/vinos/${imagen}`} alt={`${titulo} - ${varietal}`} />
                </a>
            </Link>
            <Bodega>{titulo}</Bodega>
            <Varietal>{varietal}</Varietal>
            <Link href={`/vinos/${slug}`}>
                <VerMas>Ver más</VerMas>
            </Link>
        </Cuadrado>
    );
}
 
export default CuadradoVino;