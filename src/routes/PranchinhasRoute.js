
const express = require('express') // importando express e o router pq vamos usar 
const router = express.Router()
var methodOverride = require('method-override') // importei o methodo overrider para mandar o DELETE.


const PranchinhasController = require('../controllers/PranchinhasController') // importando o controller da pranchinhas


router.use(methodOverride('_method'));

router.get('/', PranchinhasController.AllPranchinhas); // a ordem é importante.
router.get('/edit/:id', PranchinhasController.loadpranchinha);
router.get('/add', ( req , res ) => res.render('addpranchinhas', {error: false} )); // route normal só para retornar hello world na tela 


router.post('/', express.urlencoded({ extended: true }), PranchinhasController.addPranchinha ); // rota Post que está executando o objeto addPranchinhas lá do controller e usando express.urlencoded para captar formulários.  
router.post('/edit/:id', express.urlencoded({ extended: true }), PranchinhasController.editpranchinhas)



router.delete('/:id', PranchinhasController.deletePranchinha )
router.delete('/', express.urlencoded({extended: true}), PranchinhasController.deletePranchinha )


module.exports = router  