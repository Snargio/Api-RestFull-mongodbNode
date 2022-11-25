const { link } = require('fs');

const Fishs = require('../Models/fishs'); // importando o Schema e model da pranchinhas



// add Vai adicionar uma pranchinha !
const addFishs = async ( req , res ) => {

    let fishs = new Fishs(req.body) // ele vai fazer uma requisição no body pegar o documento 
   
    try {
       await fishs.save() // com await vai esperar os dados e vai salvar os novos dados no documento pranchinhas
       res.redirect('/Fishs/')
    } catch (error) {
       res.render('index', {error, body: req.body });
    }
   };
   
   
   // AllPranchinhas Vai buscar todas as Pranchinhas do banco de dados 
   const Allfishs = async ( req , res ) => {
       try {
           let fishs = await Fishs.find({}); 
           res.render('allFish', { fishs });
       } catch (error) {
          res.send(error);
       }  
   };
   
   const deletefishs = async ( req , res ) => {
   
       let id = req.params.id;
       if(!id){
           id = req.body.id;
       }
   
       try {
            await Fishs.findByIdAndDelete(id)  
            res.redirect('/Fishs/')
       } catch (error) {
          res.status(404).send(error);
       } 
   
   };
   
   const loadfishs = async ( req , res ) => {
   
       let id = req.params.id;
   
       try {
        let fishs = await Fishs.findById(id)  
            res.render('editfishs', { error:false,  body: fishs })
       } catch (error) {
          res.status(404).send(error);
       } 
       
   };
   
   const editfishs = async ( req , res ) => {
        
       let fish = {};
       fish.nome = req.body.nome;
       fish.medidas = req.body.medidas;
       fish.volume = req.body.volume;
       fish.Description = req.body.Description;
       fish.NumberVendedor = req.body.NumberVendedor;
       fish.valor = req.body.valor;
   
       let id = req.params.id;
       if(!id){
           id = req.body.id;
       }
   
       try {
          await Fishs.updateOne({ _id: id }, fish)
          res.redirect('/fishs/')
       } catch (error) {
          res.render('editfishs', {error, body: req.body });
       }
   
   }
   
   module.exports = {  editfishs , loadfishs , deletefishs , Allfishs , addFishs } // podemos passar mais pois redirect está sendo passado dentro de chaver assim sendo um objeto posibilitando criar mais de um controller. 
