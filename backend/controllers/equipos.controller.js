import Equipos from "../models/Equipos.js";

const obtenerDatos = async (req,res)=>{
    try {
        const equipos = await Equipos.find();
        res.send(equipos)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const insertarDatos = async (req,res)=>{
    const equipos = new Equipos(req.body);
    try {
        const nuevoDato = await equipos.save();
        res.send(nuevoDato);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const borrarDato = async (req,res)=>{
    try {
        await Equipos.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const actualizarDato = async (req,res)=>{
    try {
        const equipos = await Equipos.findOne({_id:req.params.id});
        if(req.body.nombre){
            equipos.nombre = req.body.nombre
        } 
        if(req.body.edad){
            equipos.edad = req.body.edad
        } 
        if(req.body.equipo){
            equipos.equipo = req.body.equipo
        } 
        if(req.body.nacionalidad){
            equipos.nacionalidad = req.body.nacionalidad
        } 
        await equipos.save();
        res.send(equipos)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const selectId = async (req,res)=>{
    try {
        const equipo = await Equipos.findOne({_id:req.params.id});
        res.send(equipo);
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