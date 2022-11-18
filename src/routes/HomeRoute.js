const express = require('express') // importando express e o router pq vamos usar 
const router = express.Router()

router.get('/', ( req , res ) => res.render('Home.ejs', {error: false } )); // route normal só para retornar hello world na tela 


module.exports = router // exportando as router/rotas 