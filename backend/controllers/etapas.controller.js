import Etapas from "../models/Etapas.js";

const obtenerDatos = async (req,res)=>{
    try {
        const etapas = await Etapas.find();
        res.send(etapas)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const insertarDatos = async (req,res)=>{
    const etapas = new Etapas(req.body);
    try {
        const nuevoDato = await etapas.save();
        res.send(nuevoDato);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const borrarDato = async (req,res)=>{
    try {
        await Etapas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const actualizarDato = async (req,res)=>{
    try {
        const etapas = await Etapas.findOne({_id:req.params.id});
        if(req.body.ciudadInicio){
            etapas.ciudadInicio = req.body.ciudadInicio
        } 
        if(req.body.ciudadFinal){
            etapas.ciudadFinal = req.body.ciudadFinal
        } 
        if(req.body.distancia){
            etapas.distancia = req.body.distancia
        } 
        await etapas.save();
        res.send(etapas)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const selectId = async (req,res)=>{
    try {
        const etapa = await Etapas.findOne({_id:req.params.id});
        res.send(etapa);
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