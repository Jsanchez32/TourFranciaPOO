import express from "express";
import { validateDocuments } from "../middlewares/validate.document.js";
import {check} from "express-validator";
import { insertarDatos,obtenerDatos,borrarDato,selectId,actualizarDato } from "../controllers/cliclistas.controller.js";
import Equipos from "../models/Equipos.js";

const router = express.Router();


router.get("/all",obtenerDatos);
router.post("/add",[
    check('equipo').custom(async(equipo='')=>{
        const existeEquipo = await Equipos.findOne({'nombre':equipo});
        if(!existeEquipo){
            throw new Error(`El equipo ${equipo} no esta registrado en la DB`);
        }
    }),
    validateDocuments
],insertarDatos);
router.delete("/del/:id",borrarDato);
router.get("/one/:id",selectId);
router.patch("/upd/:id",actualizarDato);


export default router;