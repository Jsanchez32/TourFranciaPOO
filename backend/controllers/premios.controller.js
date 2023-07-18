import Premios from "../models/Premios.js";

const obtenerDatos = async (req,res)=>{
    try {
        const premios = await Premios.find();
        res.send(premios)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const insertarDatos = async (req,res)=>{
    const premios = new Premios(req.body);
    try {
        const nuevoDato = await premios.save();
        res.send(nuevoDato);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const borrarDato = async (req,res)=>{
    try {
        await Premios.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const actualizarDato = async (req,res)=>{
    try {
        const premios = await Premios.findOne({_id:req.params.id});
        if(req.body.totalDinero){
            premios.totalDinero = req.body.totalDinero
        } 
        if(req.body.clasificacion){
            premios.clasificacion = req.body.clasificacion
        } 
        await premios.save();
        res.send(premios)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const selectId = async (req,res)=>{
    try {
        const premio = await Premios.findOne({_id:req.params.id});
        res.send(premio);
    } catch (error) {
        console.log(error);
    }
}

export {
    obtenerDatos,
    insertarDatos,
    borrarDato,
    actualizarDato,
    selectId
}