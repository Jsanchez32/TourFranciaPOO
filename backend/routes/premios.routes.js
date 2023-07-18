import express from "express";
import { insertarDatos,obtenerDatos,borrarDato,selectId,actualizarDato } from "../controllers/premios.controller.js";
import {check} from "express-validator";
import { validateDocuments } from "../middlewares/validate.document.js";
import Ciclistas from "../models/Ciclistas.js";

const router = express.Router();

router.get("/all",obtenerDatos);
router.post("/add",[
    check('numeroGanador').custom(async(numeroGanador='')=>{
        const existeGanador =  await Ciclistas.findOne({'numero':numeroGanador});
        if(!existeGanador){
            throw new Error(`El ciclista numero ${numeroGanador} no existe`);
        }
    }),
    validateDocuments
],insertarDatos);
router.delete("/del/:id",borrarDato);
router.get("/one/:id",selectId);
router.patch("/upd/:id",actualizarDato);


export default router;