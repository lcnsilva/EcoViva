import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Row, Col } from 'reactstrap';

import "./StyleInicial.css";

function TelaInicial() {

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tela inicial</h1>

            <br></br>


            <div className='container__telaInicial'>
                <div className="card">

                    <Row>
                        <Col style={{marginTop: '30px'}}>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Card subtitle
                                    </CardSubtitle>
                                </CardBody>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <CardLink href="#">
                                        Card Link
                                    </CardLink>
                                    <CardLink href="#">
                                        Another Link
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col  style={{marginTop: '30px'}}>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Card subtitle
                                    </CardSubtitle>
                                </CardBody>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <CardLink href="#">
                                        Card Link
                                    </CardLink>
                                    <CardLink href="#">
                                        Another Link
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col  style={{marginTop: '30px'}}>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Card subtitle
                                    </CardSubtitle>
                                </CardBody>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <CardLink href="#">
                                        Card Link
                                    </CardLink>
                                    <CardLink href="#">
                                        Another Link
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col style={{marginTop: '30px'}}>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Card subtitle
                                    </CardSubtitle>
                                </CardBody>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <CardLink href="#">
                                        Card Link
                                    </CardLink>
                                    <CardLink href="#">
                                        Another Link
                                    </CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div className='group'>





                    </div>
                </div>
            </div>
        </>
    );
}

export default TelaInicial;
