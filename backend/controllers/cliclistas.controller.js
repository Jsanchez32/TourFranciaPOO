import Ciclistas from "../models/Ciclistas.js";

const obtenerDatos = async (req,res)=>{
    try {
        const cliclistas = await Ciclistas.find();
        res.send(cliclistas)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const insertarDatos = async (req,res)=>{
    try {
        const {numero} = req.body;
        const ciclistas = new Ciclistas(req.body);
        const numeroExiste = await Ciclistas.findOne({numero});
    
        if(numeroExiste){
            return res.status(404).json({
                msg: "Numero ya registrado"
            });
        }
        const nuevoDato = await ciclistas.save();
        res.send(nuevoDato);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const borrarDato = async (req,res)=>{
    try {
        await Ciclistas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const actualizarDato = async (req,res)=>{
    try {
        const ciclistas = await Ciclistas.findOne({_id:req.params.id});
        if(req.body.nombre){
            ciclistas.nombre = req.body.nombre
        } 
        if(req.body.edad){
            ciclistas.edad = req.body.edad
        } 
        if(req.body.equipo){
            ciclistas.equipo = req.body.equipo
        } 
        if(req.body.nacionalidad){
            ciclistas.nacionalidad = req.body.nacionalidad
        } 
        await ciclistas.save();
        res.send(ciclistas)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const selectId = async (req,res)=>{
    try {
        const ciclista = await Ciclistas.findOne({_id:req.params.id});
        res.send(ciclista);
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