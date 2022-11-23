
const { link } = require('fs');
const Pranchinhas = require('../Models/Pranchinhas'); // importando o Schema e model da pranchinhas



// ! redirect vai Buscar um documento !
// const redirect = async (req , res, next) => {  // redirect é um objeto ou seja ele é um dos controlers  

//     let nome = req.params.nome;    // o nome que ver passado como parametro localhoste3000/parametro vai ser mandado para baixo 
// try{
//     let doc = await pranchinhas.findOne({ nome })  // o nome vai ser pego e feito uma busca dendro do documento Pranchinhas e dado um .Find() para pesquisar se existe um dado igual o que foi passado.
//     console.log(doc);
//     if (doc) { 
//         res.redirect(doc)
//     }
// }catch(error){       // catch para casa haver algum erro.
//      res.send(error);
//     }
// };


// add Vai adicionar uma pranchinha !
const addPranchinha = async ( req , res ) => {

 let pranchinha = new Pranchinhas(req.body) // ele vai fazer uma requisição no body pegar o documento 

 try {
    await pranchinha.save() // com await vai esperar os dados e vai salvar os novos dados no documento pranchinhas
    
    
    res.redirect('/pranchinhas/')
 } catch (error) {
    res.render('index', {error, body: req.body });
 }
};


// AllPranchinhas Vai buscar todas as Pranchinhas do banco de dados 
const AllPranchinhas = async ( req , res ) => {
    try {
        let pranchinha = await Pranchinhas.find({}); 
        res.render('all', { pranchinha });
    } catch (error) {
       res.send(error);
    }  
};

const deletePranchinha = async ( req , res ) => {

    let id = req.params.id;
    if(!id){
        id = req.body.id;
    }

    try {
        let pranchinha = await Pranchinhas.findByIdAndDelete(id)  
         res.redirect('/pranchinhas/')
    } catch (error) {
       res.status(404).send(error);
    } 

};

const loadpranchinha = async ( req , res ) => {

    let id = req.params.id;

    try {
     let pranchinha = await Pranchinhas.findById(id)  
         res.render('editpranchinhas', { error:false,  body: pranchinha })
    } catch (error) {
       res.status(404).send(error);
    } 
    
};

const editpranchinhas = async ( req , res ) => {
     
    let pranchinha = {};
    pranchinha.nome = req.body.nome;
    pranchinha.medidas = req.body.medidas;
    pranchinha.volume = req.body.volume;
    pranchinha.valor = req.body.valor;

    let id = req.params.id;
    if(!id){
        id = req.body.id;
    }

    try {
       let doc = await Pranchinhas.updateOne({ _id: id }, pranchinha)
       res.redirect('/pranchinhas/')
    } catch (error) {
       res.render('editpranchinhas', {error, body: req.body });
    }

}

module.exports = {  addPranchinha , AllPranchinhas , deletePranchinha , loadpranchinha , editpranchinhas } // podemos passar mais pois redirect está sendo passado dentro de chaver assim sendo um objeto posibilitando criar mais de um controller. 