module.exports = router;
let express = require('express');
const articleController = require("../controllers/newsController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
const jsonParser = express.json();


router.get('/',newsController.getNewAll);
router.get('/:idNew',newsController.getNew);

module.exports = router;