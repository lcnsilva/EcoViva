import React, { useState, useEffect } from 'react';
import { createDicas, fetchDicas} from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, FormGroup, Modal, ModalHeader, ModalBody, Form, Label, Input, ModalFooter, Button } from 'reactstrap';
import "../TelaInicial/StyleInicial.css";
import { FcPlus } from "react-icons/fc";

    const PostDicas = () => {
        const [dica, setDica] = useState([]);

        const [titulo, setTitulo] = useState('');
        const [descricao, setDescricao] = useState('');
        const [addShowModal, setAddShowModal] = useState(false);
        const [nomePesquisa, setnomePesquisa] = useState("");

      
        const handleSubmitDicas = async (e) => {
          e.preventDefault();
          await createDicas({ titulo, descricao });         
          setTitulo('');
          setDescricao('');
        };
        
        useEffect(() => {
            getDicas();
            const interval = setInterval(fetchDicas, 2000);
            return () => clearInterval(interval);
    
        }, [])
    
        const getDicas = async () => {
            const getDicaData = await fetchDicas();
            setDica(getDicaData);
        };
    

        const handleSearchBynome = async (e) => {
            e.preventDefault();
            if (!nomePesquisa) {
                await getDicas();
                return;
            }
            try {
                const response = await fetch(`http://localhost:3001/publicacoes/${nomePesquisa}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar publicações!');
                }
                const data = await response.json();
                console.log('Data received:', data);
                setDica(data);
            } catch (error) {
                console.error('Erro:', error);
            }
    
        }

        return (
            <>
            <br></br>
            <Row>
                <Col md={4}>
                    <Modal isOpen={addShowModal} toggle={() => setAddShowModal(!addShowModal)}>
                        <ModalHeader toggle={() => setAddShowModal(!addShowModal)}>Cadastro de dica</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="titulo">Título</Label>
                                    <Input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="descricao">Descrição</Label>
                                    <Input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={handleSubmitDicas}>Cadastrar</Button>
                            <Button color="secondary" onClick={() => setAddShowModal(false)}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>

            <div className='filter'>
                <form onSubmit={handleSearchBynome} className='pesquisa'>
                    <Input
                        type='text'
                        placeholder='Pesquisar'
                        className='inputFiltro'
                        value={nomePesquisa}
                        onChange={e => setnomePesquisa(e.target.value)}
                    />
                </form>
            </div>
            <Button color="success" onClick={() => setAddShowModal(true)} className='buttonOpenModal'><FcPlus /></Button>
            <div className='container__telaInicial'>
                <div className="card">
                    <Row>
                        {dica.map((dica, index) => (
                            <Col style={{ marginTop: '30px' }}>
                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                >
                                    <CardBody>

                                        <CardTitle tag="h5">
                                            {dica.titulo}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {dica.nome}
                                        </CardSubtitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src="https://picsum.photos/318/180"
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardText>
                                            <label>Descrição: </label>
                                            {dica.descricao}
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
};
  export default PostDicas;