const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'documents/' });

const restaurantsController = require('../controllers/restaurants.controller');

router.get('/', restaurantsController.index);
router.get('/new', restaurantsController.new);
router.post('/', upload.single('pic'), restaurantsController.create);
router.post('/:id/delete', restaurantsController.delete);
router.get('/:id/pic', restaurantsController.pic);

module.exports = router;
