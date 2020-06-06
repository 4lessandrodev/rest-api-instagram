var express = require('express');
var router = express.Router();
var comentController = require('../controllers/comentController');

//PRIVATE ROUTES
//localhost:3000/coments/list/1?limit=5
router.get('/list/:postsId', comentController.list);


module.exports = router;
