import React, { useState, useEffect } from 'react';
import { createEventos, fetchEventos} from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, FormGroup, Modal, ModalHeader, ModalBody, Form, Label, Input, ModalFooter, Button } from 'reactstrap';
import "../TelaInicial/StyleInicial.css";
import { FcPlus } from "react-icons/fc";


    const PostEventos = () => {
        const [evento, setEvento] = useState([]);

        const [titulo, setTitulo] = useState('');
        const [nome_organizador, setNome_organizador] = useState('');
        const [endereco, setEndereco] = useState('');
        const [descricao, setDescricao] = useState('');
        const [addShowModal, setAddShowModal] = useState(false);
        const [nomePesquisa, setnomePesquisa] = useState("");
        const [data_inicio, setData_inicio] = useState("");
        const [data_final, setData_final] = useState("");

      
        const handleSubmitEventos = async (e) => {
          
          await createEventos({ titulo, nome_organizador, endereco, descricao, data_inicio, data_final });
          setNome_organizador('');
          setTitulo('');
          setEndereco('');
          setDescricao('');
          setData_inicio('');
          setData_final('');
        };
        
        useEffect(() => {
            getEventos();
            const interval = setInterval(fetchEventos, 2000);
            return () => clearInterval(interval);
    
        }, [])
    
        const getEventos = async () => {
            const getEventoData = await fetchEventos();
            setEvento(getEventoData);
        };
        
        const handleSearchBynome = async (e) => {
            e.preventDefault();
            if (!nomePesquisa) {
                await getEventos();
                return;
            }
            try {
                const response = await fetch(`http://localhost:3001/publicacoes/${nomePesquisa}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar publicações!');
                }
                const data = await response.json();
                console.log('Data received:', data);
                setEvento(data);
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
                        <ModalHeader toggle={() => setAddShowModal(!addShowModal)}>Cadastro de evento</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="titulo">Título</Label>
                                    <Input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="nome">Nome</Label>
                                    <Input type="text" value={nome_organizador} onChange={e => setNome_organizador(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="descricao">Descrição</Label>
                                    <Input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="endereco">Endereco</Label>
                                    <Input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="dataInicio">data de inicio</Label>
                                    <Input type="date" value={data_inicio} onChange={e => setData_inicio(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="endereco">Endereco</Label>
                                    <Input type="date" value={data_final} onChange={e => setData_final(e.target.value)} />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={handleSubmitEventos}>Cadastrar</Button>
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
                        {evento.map((evento, index) => (
                            <Col style={{ marginTop: '30px' }}>
                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                >
                                    <CardBody>

                                        <CardTitle tag="h5">
                                            {evento.titulo}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            <label>Voluntário:  </label>
                                            {evento.nome_organizador}
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
                                            {evento.descricao}
                                        </CardText>
                                        <CardText>
                                            <label>Local: </label>
                                            {evento.endereco}
                                        </CardText>
                                        <CardText>
                                            <label>Inicio: </label>
                                            {evento.data_inicio}
                                        </CardText>
                                        <CardText>
                                            <label>Término: </label>
                                            {evento.data_final}
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
  export default PostEventos;