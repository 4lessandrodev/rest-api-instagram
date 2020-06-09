var express = require('express');
var router = express.Router();
var likeController = require('../controllers/likeController');

//PRIVATE ROUTES
//localhost:3000/likes/like/1
router.post('/like/:postId', likeController.saveOrDelete);

module.exports = router;
