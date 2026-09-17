# CRUD de Personagens com Node.js

Projeto simples usando Node.js, Express e Mongoose.

## Estrutura

```text
src/
├── controllers/
│   └── personagemController.js
├── models/
│   └── Personagem.js
├── routes/
│   └── personagemRoutes.js
└── server.js
```

## Executar

```bash
npm install
cp .env.example .env
npm run dev
```

É necessário ter o MongoDB rodando localmente.

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | /personagens | Lista personagem |
| GET | /personagens/:id | Busca um personagem |
| POST | /personagens | Cria um personagem |
| PUT | /personagens/:id | Atualiza um personagem |
| DELETE | /personagens/:id | Exclui um personagem |

## Exemplo de JSON

```json
{
  "nome": "Satoru Gojo",
  "categoria": "Feiticeiro",
  "tecnica": "Limitless"
}
```
