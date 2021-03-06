const router = require('express').Router();
const controllers = require('../controllers');
const itemsController = controllers.items;

router.get('', itemsController.getAllFiltered);
router.get('/:id', itemsController.getById);

module.exports = router;