import React, { useState, useEffect } from 'react';
import { createDicas, fetchDicas} from './api';

    const PostDicas = () => {
        const [Dica, setDica] = useState([]);

        const [titulo, setTitulo] = useState('');
        const [descricao, setDescricao] = useState('');

      
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
    

        return (
            <>
            <h1>tela de postagem de dicas</h1>

            </>
        );
  
};
  export default PostDicas;