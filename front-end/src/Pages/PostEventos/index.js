import React, { useState, useEffect } from 'react';
import { createEventos, fetchEventos} from './api';

    const PostEventos = () => {
        const [evento, setEvento] = useState([]);

        const [titulo, setTitulo] = useState('');
        const [nome_organizador, setNome_organizador] = useState('');
        const [endereco, setEndereco] = useState('');
        const [descricao, setDescricao] = useState('');
      
        const handleSubmitEventos = async (e) => {
          e.preventDefault();
          await createEventos({ titulo, nome_organizador, endereco, descricao });
          setNome_organizador('');
          setTitulo('');
          setEndereco('');
          setDescricao('');
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
    

        return (
            <>
            <h1>tela de postagem de eventos</h1>

            </>
        );
  
};
  export default PostEventos;