import mongoose from "mongoose";

const premioSchema = mongoose.Schema(
  {
    totalDinero: {
      type: String,
      require: true,
      trim: true,
    },
    clasificacion: {
      type: String,
      require: true,
      trim: true,
    },
    numeroGanador:{
      type:String,
      require: true,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

const Premios = mongoose.model("premios", premioSchema);

export default Premios;
