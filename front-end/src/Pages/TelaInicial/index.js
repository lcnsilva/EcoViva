import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, FormGroup, Modal, ModalHeader, ModalBody, Form, Label, Input, ModalFooter, Button } from 'reactstrap';
import "./StyleInicial.css";
import { FcPlus } from "react-icons/fc";
import { createPost } from './api';
import { fetchPost } from './api';

function TelaInicial() {
    const [post, setPost] = useState([]);

    const [nome, setNome] = useState("");
    const [topico, setTopico] = useState("");
    const [descricao, setDescricao] = useState("");
    const [contato, setContato] = useState("");
    const [addShowModal, setAddShowModal] = useState(false);

    useEffect(() => {
        getPost();
        const interval = setInterval(fetchPost, 2000);
        return () => clearInterval(interval);

    }, [])

    const getPost = async () => {
        const getPost = await fetchPost();
        setPost(getPost);
    };

    const handleCadastroPost = async (e) => {
        e.preventDefault();
        await createPost({ nome, topico, descricao, contato });
        setAddShowModal(false);
        setNome('');
        setTopico('');
        setDescricao('');
        setContato('');
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tela inicial</h1>
            <Button color="success" onClick={() => setAddShowModal(true)} style={{ float: 'right' }}><FcPlus /></Button>

            <br></br>
            <Row>
                <Col md={4}>
                    <Modal isOpen={addShowModal} toggle={() => setAddShowModal(!addShowModal)}>
                        <ModalHeader toggle={() => setAddShowModal(!addShowModal)}>Cadastro de post</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="nome">Nome</Label>
                                    <Input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="topico">Topico</Label>
                                    <Input type="text" value={topico} onChange={e => setTopico(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="descricao">Descrição</Label>
                                    <Input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="contato">Contato</Label>
                                    <Input type="email" value={contato} onChange={e => setContato(e.target.value)} />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={handleCadastroPost}>Cadastrar</Button>
                            <Button color="secondary" onClick={() => setAddShowModal(false)}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
            <div className='container__telaInicial'>
                <div className="card">
                    <Row>
                        {post.map((post, index) => (
                            <Col style={{ marginTop: '30px' }}>
                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                >
                                    <CardBody>

                                        <CardTitle tag="h5">
                                            {post.nome}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {post.topico}
                                        </CardSubtitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src="https://picsum.photos/318/180"
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardText>
                                            {post.descricao}
                                        </CardText>
                                        <CardText>
                                            {post.contato}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </div>
            </div>
        </>
    );
}

export default TelaInicial;
