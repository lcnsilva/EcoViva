const Dica = require('../models/Dica.js');

class DicaController{

    static listarDicas = async (req,res) => {
        try{
            const dicaResultado = await Dica.findAll({order: [
                ['id_dica', 'DESC']
            ]});
            res.status(200).json(dicaResultado);
        }catch(error){
            res.status(500).json({ message: "Erro interno no servidor" });
        }
        
    };
    static cadastrarDica = async (req,res) => {
        try{
            let {titulo, descricao} = req.body;

            const dicaResultado = await Dica.create({
                titulo,
                descricao
            });
            res.status(201).json(dicaResultado.toJSON());
        }catch(error){
            res.status(500).send({message: `${error.message} and ${error}- falha ao cadastrar Dica.`})
        }
    };

    static atualizarDica = async (req,res) => {
        const id = req.params.id;
        try{
            let {titulo, descricao} = req.body;
            let dados = {titulo, descricao};
            const dicaResultado = await Dica.update(dados, {where: {id_dica : id}});
            res.status(200).send({message: "Dica atualizada com sucesso"});
        }catch(error){
            res.status(500).send({message: `${error.message} - falha ao atualizar Dica.`})
        }
    }

    static excluirDica = async (req,res) => {
        const id = req.params.id;
        try{
            Dica.destroy({where: {id_dica : id}})
            res.status(200).send({message: "Dica removida com sucesso"});
        }catch(error){
            res.status(500).send({message: `${error.message} - falha ao excluir Dica.`})
        }
    }

}

module.exports = DicaController;