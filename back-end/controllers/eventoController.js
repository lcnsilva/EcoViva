const Evento = require('../models/Evento.js');

class EventoController{

    static listarEventos = async (req,res) => {
        try{
            const eventoResultado = await Evento.findAll({order: [
                ['id_evento', 'ASC']
            ]});
            res.status(200).json(eventoResultado);
        }catch(error){
            res.status(500).json({ message: "Erro interno no servidor" });
        }
        
    };
    static cadastrarEvento = async (req,res) => {
        try{
            let {titulo, nome_organizador, data_inicio, data_final, endereco, descricao} = req.body;

            const eventoResultado = await Evento.create({
                titulo,
                nome_organizador,
                data_inicio,
                data_final,
                endereco,
                descricao
            });
            res.status(201).json(eventoResultado.toJSON());
        }catch(error){
            res.status(500).send({message: `${error.message} and ${error}- falha ao cadastrar Evento.`})
        }
    };

    static atualizarEvento = async (req,res) => {
        const id = req.params.id;
        try{
            let {nome_organizador, data_inicio, data_final, endereco, descricao} = req.body;
            let dados = {nome_organizador, data_inicio, data_final, endereco, descricao};
            const eventoResultado = await Evento.update(dados, {where: {id_Evento : id}});
            res.status(200).send({message: "Evento atualizado com sucesso"});
        }catch(error){
            res.status(500).send({message: `${error.message} - falha ao atualizar Evento.`})
        }
    }

    static excluirEvento = async (req,res) => {
        const id = req.params.id;
        try{
            Evento.destroy({where: {id_Evento : id}})
            res.status(200).send({message: "Evento removido com sucesso"});
        }catch(error){
            res.status(500).send({message: `${error.message} - falha ao excluir Evento.`})
        }
    }



}

module.exports = EventoController;