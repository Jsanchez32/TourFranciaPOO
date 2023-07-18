import express from "express";
import { insertarDatos,obtenerDatos,borrarDato,selectId,actualizarDato } from "../controllers/etapas.controller.js";
import { validateDocuments } from "../middlewares/validate.document.js";
import { check } from "express-validator";

const router = express.Router();

router.get("/all",obtenerDatos);
router.post("/add",[
    check('ciudadInicio','Ciudad inicio es obligatorio').not().isEmpty(),
    check('ciudadFinal','Ciudad Final es obligatorio').not().isEmpty(),
    check('distancia','Distancia es obligatorio').not().isEmpty(),
    validateDocuments
],insertarDatos);
router.delete("/del/:id",borrarDato);
router.get("/one/:id",selectId);
router.patch("/upd/:id",actualizarDato);


export default router;