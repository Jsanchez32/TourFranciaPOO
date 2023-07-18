import mongoose from "mongoose";

const etapasSchema = mongoose.Schema(
  {
    ciudadInicio: {
        type: String,
        require: true,
        trim: true,
    },
    ciudadFinal: {
        type: String,
        require: true,
        trim: true,
    },
    distancia:{
        type: String,
        require: true,
        trim: true
    }
  },
  {
    timestamps: true,
  }
);

const Etapas = mongoose.model("etapas", etapasSchema);

export default Etapas;
