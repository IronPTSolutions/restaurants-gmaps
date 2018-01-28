const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'public/uploads' });

const restaurantsController = require('../controllers/restaurants.controller');

router.get("/", restaurantsController.index);
router.get("/new", restaurantsController.new);
router.post("/", upload.single('pic'), restaurantsController.create);
router.get('/:id/pic', restaurantsController.pic);
router.post('/:id/delete', restaurantsController.delete);
router.get("/edit/:id", restaurantsController.new);

module.exports = router;
