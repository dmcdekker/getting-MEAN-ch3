var express = require('express');
var router = express.Router();

//require main controllers file
var ctrlMain = require('../controllers/main');

//reference index method of controllers in route of definition
/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
