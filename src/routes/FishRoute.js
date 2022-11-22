
const express = require('express') // importando express e o router pq vamos usar 
const router = express.Router()
var methodOverride = require('method-override') // importei o methodo overrider para mandar o DELETE.
router.use(methodOverride('_method'));

const FishControler = require('../controllers/FishControler') // importando o controller da pranchinhas



router.get('/', FishControler.Allfishs); // a ordem é importante.
router.get('/edit/:id', FishControler.loadfishs);
router.get('/add', ( req , res ) => res.render('addfish', {error: false} )); // route normal só para retornar hello world na tela 


router.post('/', express.urlencoded({ extended: true }), FishControler.addFishs ); // rota Post que está executando o objeto addPranchinhas lá do controller e usando express.urlencoded para captar formulários.  
router.post('/edit/:id', express.urlencoded({ extended: true }), FishControler.editfishs)



router.delete('/:id', FishControler.deletefishs )
router.delete('/', express.urlencoded({extended: true}), FishControler.deletefishs )


module.exports = router  