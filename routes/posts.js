var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

//PRIVATE ROUTES
//localhost:3000/post
router.post('/save', postController.save);


module.exports = router;
