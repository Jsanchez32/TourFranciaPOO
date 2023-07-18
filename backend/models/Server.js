import express from "express";
import cors from "cors";
import ciclistasRouter from "../routes/ciclistas.routes.js";
import equiposRouter from "../routes/equipos.routes.js";
import premiosRouter from "../routes/premios.routes.js";
import etapasRouter from "../routes/etapas.routes.js";
class Server {
    constructor(){
        this.app=express();
        this.app.use(express.json());
        this.port = process.env.PORT;

        this.ciclistasPath = "/ciclista";
        this.equiposPath = "/equipo";
        this.premiosPath = "/premio";
        this.etapasPath = "/etapa";
        
        //Middlewares//
        this.middlewares();
        //Routes//
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
    }
    routes(){
        this.app.use(this.ciclistasPath,ciclistasRouter);
        this.app.use(this.equiposPath,equiposRouter);
        this.app.use(this.premiosPath,premiosRouter);
        this.app.use(this.etapasPath,etapasRouter);
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running en port ${this.port}`);
        })
    }
}

export default Server;