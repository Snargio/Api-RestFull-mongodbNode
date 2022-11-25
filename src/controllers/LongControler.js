const { link } = require('fs');

const Longs = require('../Models/longBoard'); // importando o Schema e model da pranchinhas



// add Vai adicionar uma pranchinha !
const addlongs = async ( req , res ) => {

    let longs = new Longs(req.body) // ele vai fazer uma requisição no body pegar o documento 
   
    try {
       await longs.save() // com await vai esperar os dados e vai salvar os novos dados no documento pranchinhas
       
       
       res.redirect('/longboards/')
    } catch (error) {
       res.render('index', {error, body: req.body });
    }
   };
   
   
   // AllPranchinhas Vai buscar todas as Pranchinhas do banco de dados 
   const Alllongs = async ( req , res ) => {
       try {
           let longs = await Longs.find({}); 
           res.render('allLong', { longs });
       } catch (error) {
          res.send(error);
       }  
   };
   
   const deletelongs = async ( req , res ) => {
   
       let id = req.params.id;
       if(!id){
           id = req.body.id;
       }
   
       try {
            await Longs.findByIdAndDelete(id)  
            res.redirect('/longboards/')
       } catch (error) {
          res.status(404).send(error);
       } 
   
   };
   
   const loadlongs = async ( req , res ) => {
   
       let id = req.params.id;
   
       try {
        let longs = await Longs.findById(id)  
            res.render('editLong', { error:false,  body: longs })
       } catch (error) {
          res.status(404).send(error);
       } 
       
   };
   
   const editlongs = async ( req , res ) => {
        
       let long = {};
       long.nome = req.body.nome;
       long.medidas = req.body.medidas;
       long.volume = req.body.volume;
       long.Description = req.body.Description;
       long.NumberVendedor = req.body.NumberVendedor;
       long.valor = req.body.valor;
   
       let id = req.params.id;
       if(!id){
           id = req.body.id;
       }
   
       try {
             await Longs.updateOne({ _id: id }, long)
             res.redirect('/longboards/')
       } catch (error) {
          res.render('editLong', {error, body: req.body });
       }
   
   }
   
   module.exports = {  editlongs , loadlongs , deletelongs , Alllongs , addlongs } // podemos passar mais pois redirect está sendo passado dentro de chaver assim sendo um objeto posibilitando criar mais de um controller. 
