import React, {useState} from 'react';
import Head from 'next/head';
import Layout from '../components/UI/Layout';
import CuadradoVino from '../components/vinos/CuadradoVino';
import VinosListado from '../vinos-lista.json';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';

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

const Vinos = () => {

    const [varietalSelected, setVarietalSelected] = useState('todos');
    const [lineaSelected, setLineaSelected] = useState('todas');
    const [mostrando, setMostrando] = useState(0);

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
                <title>Vinos | Lola Montes</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <Layout>
                <main
                    style={{backgroundColor: 'white'}}
                >
                    <Container className="p-secc">
                        <Row style={{justifyContent: 'center'}} className="mb-5">
                            <Col sm={12} md={6} lg={4} className="mb-4">
                                <SpanSelectName>Varietal</SpanSelectName>
                                <SelectFiltro
                                    onChange={(e) => handleChangeVarietal(e)}
                                >
                                    <option value="todos">Todos</option>
                                    {
                                        varietales.map(vari => (
                                            <option key={vari} value={vari}>{vari}</option>
                                        ))
                                    }
                                </SelectFiltro>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <SpanSelectName>Línea</SpanSelectName>
                                <SelectFiltro
                                    onChange={(e) => handleChangeLinea(e)}
                                >
                                    <option value="todas">Todas</option>
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
                                            <Col key={index} xs={12} md={6} lg={4} className={`animate__animated animate__fadeIn animate__fast animate__delay-${index % 2 === 0 ? '1' : '0'}s`}>
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
 
export default Vinos;