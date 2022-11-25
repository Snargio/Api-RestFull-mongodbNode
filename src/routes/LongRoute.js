const express = require('express') // importando express e o router pq vamos usar 
const router = express.Router()
var methodOverride = require('method-override') // importei o methodo overrider para mandar o DELETE.


const LongControler = require('../controllers/LongControler') // importando o controller da pranchinhas


router.use(methodOverride('_method'));

router.get('/', LongControler.Alllongs); // a ordem é importante.
router.get('/edit/:id', LongControler.loadlongs);
router.get('/add', ( req , res ) => res.render('addlong', {error: false} )); // route normal só para retornar hello world na tela 


router.post('/', express.urlencoded({ extended: true }), LongControler.addlongs ); // rota Post que está executando o objeto addPranchinhas lá do controller e usando express.urlencoded para captar formulários.  
router.post('/edit/:id', express.urlencoded({ extended: true }), LongControler.editlongs)



router.delete('/:id', LongControler.deletelongs )
router.delete('/', express.urlencoded({ extended: true }), LongControler.deletelongs )


module.exports = router  