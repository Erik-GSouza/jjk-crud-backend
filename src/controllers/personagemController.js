const Personagem = require("../models/Personagem");

// lista dos char cadastrados
async function listarPersonagens(req, res) {
  try {
    const personagens = await Personagem.find();
    res.json(personagens);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

// buscar char pelo id
async function buscarPersonagem(req, res) {
  try {
    const personagem = await Personagem.findById(req.params.id);

    if (!personagem) {
      return res.status(404).json({ mensagem: "Personagem não encontrado" });
    }

    res.json(personagem);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

// cadastrar novo char
async function criarPersonagem(req, res) {
  try {
    const personagem = await Personagem.create(req.body);
    res.status(201).json(personagem);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarPersonagem(req, res) {
  try {
    const personagem = await Personagem.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!personagem) {
      return res.status(404).json({ mensagem: "Personagem não encontrado" });
    }

    res.json(personagem);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

// excluir char pleo ID
async function excluirPersonagem(req, res) {
  try {
    const personagem = await Personagem.findByIdAndDelete(req.params.id);

    if (!personagem) {
      return res.status(404).json({ mensagem: "Personagem não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarPersonagens,
  buscarPersonagem,
  criarPersonagem,
  atualizarPersonagem,
  excluirPersonagem
};
