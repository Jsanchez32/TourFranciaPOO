import mongoose from "mongoose";

const cliclistaSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    edad:{
        type:String,
        require:true,
        trim:true
    },
    equipo:{
        type:String,
        require:true,
        trim:true
    },
    nacionalidad:{
        type:String,
        require:true,
        trim:true
    },
    numero:{
        type:String,
        require:true,
        trim:true
    }
},
{
    timestamps:true
});

const Ciclistas = mongoose.model("cliclistas",cliclistaSchema);

export default Ciclistas;