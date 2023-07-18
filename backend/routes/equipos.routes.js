import express from "express";
import { insertarDatos,obtenerDatos,borrarDato,selectId,actualizarDato } from "../controllers/equipos.controller.js";

const router = express.Router();

router.get("/all",obtenerDatos);
router.post("/add",insertarDatos);
router.delete("/del/:id",borrarDato);
router.get("/one/:id",selectId);
router.patch("/upd/:id",actualizarDato);


export default router;