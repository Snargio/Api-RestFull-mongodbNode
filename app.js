const express = require('express');
const mongoose = require("mongoose");
const path = require("path")
const app = express();
const port = 3000; 



// Importando Rotas
const HomeRoute = require('./src/routes/HomeRoute') // importando as Rotas da documentação da Home
const PranchinhasRoute = require('./src/routes/PranchinhasRoute') // importando as Rotas da documentação das pranchinhas
// -------------


// ------------- Conect Banco
mongoose.connect("mongodb://127.0.0.1:27017/loja",{
   useNewUrlParser: true,
   useUnifiedTopology:true
});

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro"); })
db.once("open", () => { console.log("Banco carregado");});
// -------------


// Set Teamplate Enginer
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"./src/teamplates")  )
// -------------


// Rotas 
app.use('/', HomeRoute);
app.use('/pranchinhas',PranchinhasRoute); // app.use para todos métodos http /Pranchinhas e passando as Rotas que pranchinhas usa
// app.use('*', ( req , res ) => res.render('Error404PagNanEncontrada.ejs', {error: false } ));
// -------------


// Finalização Express REST
app.listen(port, () => {
    console.log(`Server Runing on port ${port}`);
});        
// -------------
