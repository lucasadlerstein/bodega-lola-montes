import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from '../components/UI/Layout';
import CuadradoVino from '../components/vinos/CuadradoVino';
import VinosListado from '../vinos-lista.json';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';

import { withTranslation } from '../i18n';


const SelectFiltro = styled.select`
    border: none;
    padding: 1rem .5rem;
    -webkit-box-shadow: -8px 7px 5px -4px rgba(0,0,0,0.10);
-moz-box-shadow: -8px 7px 5px -4px rgba(0,0,0,0.10);
box-shadow: -8px 7px 5px -4px rgba(0,0,0,0.10);
`;

const SpanSelectName = styled.span`
    text-transform: uppercase;
    margin-right: 1.5rem;
    font-weight: bold;
`;

const Vinos = ({t}) => {

    const [varietalSelected, setVarietalSelected] = useState('todos');
    const [lineaSelected, setLineaSelected] = useState('todas');
    const [mostrando, setMostrando] = useState(0);

    useEffect(() => {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const linea = urlParams.get('linea');
        const varietal = urlParams.get('varietal');

        if(varietal) {
            setVarietalSelected(varietal);
        }
        if(linea) {
            setLineaSelected(linea);
        }


        // eslint-disable-next-line
    }, []);

    const varietales = [
        'Malbec',
        'Cabernet Sauvignon',
        'Syrah',
        'Red Blend',
        'Chardonnay',
        'Sauvignon Blanc',
        'White Blend',
        'Rosé',
        // 'Cosecha Tardía',
        'Extra Brut'
    ]

    const handleChangeLinea = e => {
        setLineaSelected(e.target.value);
        setMostrando(0);
    }

    const handleChangeVarietal = e => {
        setVarietalSelected(e.target.value);
        setMostrando(0);
    }

    return (
        <>
            <Head>
                <title>Bodega Lola Montes - Vinos por Línea o Varietal</title>
                <meta name="description" content="Conozca nuestros vinos seleccionados buscando por varietal o línea." />
                <meta name="keywords" content="Vinos, Vino, Lola Montes, Viñedo, Vino Tinto, Vino Blanco, Bodega, Mendoza, Rocky, Lola, Circus, Malbec, Blend, Uva, Uvas, Viñedos, Cabernet, Cabernet Sauvignon, Syrah, Red Blend, Chardonnay, Sauvignon Blanc, White Blend, Rosé, Extra Brut, Champaña, Champagne" />
            </Head>
            <Layout>
                <main
                    style={{backgroundColor: 'white'}}
                >
                    <Container className="p-secc">
                        <Row style={{justifyContent: 'center'}} className="mb-5 animate__animated animate__fadeIn">
                            <Col sm={12} md={6} lg={4} className="mb-4">
                                <SpanSelectName>{t('Vinos.Varietal')}</SpanSelectName>
                                <SelectFiltro
                                    onChange={(e) => handleChangeVarietal(e)}
                                    value={varietalSelected}
                                >
                                    <option value="todos">{t('Vinos.Todos')}</option>
                                    {
                                        varietales.map(vari => (
                                            <option key={vari} value={vari}>{vari}</option>
                                        ))
                                    }
                                </SelectFiltro>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <SpanSelectName>{t('Vinos.Linea')}</SpanSelectName>
                                <SelectFiltro
                                    onChange={(e) => handleChangeLinea(e)}
                                    value={lineaSelected}
                                >
                                    <option value="todas">{t('Vinos.Todas')}</option>
                                    <option value="Circus">Circus Wines</option>
                                    <option value="Rocky">Rocky Wines</option>
                                    <option value="Lola Montes">Lola Montes</option>
                                </SelectFiltro>
                            </Col>
                        </Row>
                        <Row>
                            {
                                VinosListado.vinos.map((vino, index) => {
                                    if( (varietalSelected === 'todos' || varietalSelected === vino.varietal) && (lineaSelected === 'todas' || lineaSelected === vino.uno)  ) {
                                        return (
                                            <Col key={index} xs={12} md={6} lg={4} className={`animate__animated animate__fadeIn animate__fast animate__delay-${index % 2 === 0 ? '1' : '0-5'}s`}>
                                                <CuadradoVino titulo={`${vino.uno} ${vino.dos}`} varietal={vino.varietal} imagen={vino.imagen} slug={vino.slug} bodega={vino.uno} />
                                            </Col>
                                        )
                                    }
                                })
                            }
                        </Row>
                    </Container>
                </main>
            </Layout>
        </>
    );
}
 
Vinos.getInitialProps = async () => ({
    namespacesRequired: ['vinos'],
  });
  
  export default withTranslation('vinos')(Vinos);