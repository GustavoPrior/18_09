//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const controllerNumbers = require("../controllers/controllerNumbers")

router.post("/par/", controllerNumbers.chekPar);
router.post("/primo/", controllerNumbers.chekPrimo);


module.exports = router
