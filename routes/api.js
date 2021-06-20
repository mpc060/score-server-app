var express = require("express");
var router = express.Router();
var ProductController = require("../controllers/ProductController");
var AuthController = require('../controllers/AuthController');

router.use(AuthController.check_token);

router.get('/products', ProductController.all);

module.exports = router;