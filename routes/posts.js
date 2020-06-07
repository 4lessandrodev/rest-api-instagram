var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

//PRIVATE ROUTES
//localhost:3000/posts/save
router.post('/save', postController.save);

//localhost:3000/posts/list?limit=10&page=1
router.get('/list', postController.list);


module.exports = router;
