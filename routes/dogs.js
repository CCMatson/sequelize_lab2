const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')

router.get('/', dogsCtrl.index)
router.post('/', dogsCtrl.create)
router.put('/:id', dogsCtrl.update)
router.delete('/:id', dogsCtrl.delete)

module.exports = router