const express = require("express");
const personagemController = require("../controllers/personagemController");

const router = express.Router();

router.get("/", personagemController.listarPersonagens);
router.get("/:id", personagemController.buscarPersonagem);
router.post("/", personagemController.criarPersonagem);
router.put("/:id", personagemController.atualizarPersonagem);
router.delete("/:id", personagemController.excluirPersonagem);

module.exports = router;
