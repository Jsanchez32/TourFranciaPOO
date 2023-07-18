import mongoose from "mongoose";

const equipoSchemas = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true,
    },
    pais: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Equipos = mongoose.model("equipos", equipoSchemas);

export default Equipos;
