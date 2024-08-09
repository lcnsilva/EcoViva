import React, { useState } from 'react';
import { createEventos } from './api';
import { useNavigate } from 'react-router-dom';

    const PostEventos = () => {
        const [titulo, setTitulo] = useState('');
        const [nome_organizador, setNome_organizador] = useState('');
        const [endereco, setEndereco] = useState('');
        const [descricao, setDescricao] = useState('');
        const navigate = useNavigate();
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          await createEventos({ titulo, nome_organizador, endereco, descricao });
          setNome_organizador('');
          setTitulo('');
          setEndereco('');
          setDescricao('');
          navigate('/');
        };
    

    return (
        <>
        <h1>tela de postagem de eventos</h1>

        </>
    );
  
};
  export default PostEventos;