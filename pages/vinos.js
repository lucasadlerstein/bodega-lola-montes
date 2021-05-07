import React from 'react';
import Layout from '../components/UI/Layout';
import CuadradoVino from '../components/vinos/CuadradoVino';
import VinosListado from '../vinos-lista.json';
import {Container, Row, Col} from 'reactstrap';

const Vinos = () => {

    return (
        <Layout>
            <main
                style={{backgroundColor: 'white'}}
            >
                <Container className="p-secc">
                    <Row>
                        {
                            VinosListado.vinos.map((vino, index) => {
                                return (
                                    <Col xs={12} md={6} lg={4} className={`animate__animated animate__fadeIn animate__fast animate__delay-${index}s`}>
                                        <CuadradoVino titulo={`${vino.uno} ${vino.dos}`} varietal={vino.varietal} imagen={vino.imagen} slug={vino.slug} color={index % 2 === 0 ? '#ffc60b' : '#f4f1e8'} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </main>
        </Layout>
    );
}
 
export default Vinos;