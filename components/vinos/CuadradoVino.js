import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {withTranslation} from '../../i18n';

const CuadradoVino = ({titulo, imagen, varietal, slug, bodega, t}) => {


    const Cuadrado = styled.div`
        background-color: var(--colorBeige);
        width: 100%;
        padding: 2rem 0;
        text-align: center;
        margin: 1.5rem 0; 
        transition: all .3s ease;
        color: black;
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

    const VerTienda = styled.a`
        color: black;
        cursor: pointer;
        transition: all .5s ease;
    `;


    const VerMas = styled.a`
        background-color: black;
        color: white;
        display: block;
        width: 12rem;
        margin: 0 auto 1rem;
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
            <p>{varietal}</p>
            <Link href={`/vinos/${slug}`}>
                <VerMas>{t('Vinos.VerMas')}</VerMas>
            </Link>            
            <VerTienda target="_blank" href={(bodega === 'Circus') ? 'https://tienda.bodegalolamontes.com/circus-wines/' : (bodega === 'Lola Montes') ? 'https://tienda.bodegalolamontes.com/lola-montes/' : 'https://tienda.bodegalolamontes.com/rocky-wines/'} >{t('Vinos.VerTienda')}</VerTienda>
        </Cuadrado>
    );
}
 
 
CuadradoVino.getInitialProps = async () => ({
    namespacesRequired: ['vinos'],
  });
  
  export default withTranslation('vinos')(CuadradoVino);