//carregar modulos
const express = require('express');
const path = require('path');

//configuraçâo
const app = express();
const router = express.Router();

//rotas/caminhos da aplicação
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+"/frontend/index.html"));
})

router.get("/trabalhos", (req, res)=>{
    res.sendFile(path.join(__dirname+"/frontend/trabalhos.html"));
})

router.get("/projetos", (req, res)=>{
    res.sendFile(path.join(__dirname+"/frontend/projetos.html"));
})

//config
app.use(router);
app.use(express.static(path.join((__dirname,'frontend')))); //tornar publica a pasta com os arquivos dentro.

//inicializar servidor
app.listen(3500, (err)=>{
    console.log("servidor inicializado!")
})