const mongoose = require("mongoose");

const personagemSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    categoria: {
      type: String,
      required: true,
    },
    tecnica: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Personagem", personagemSchema);
