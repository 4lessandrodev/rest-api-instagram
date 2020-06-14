const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

//PRIVATE ROUTES
//http://localhost:3000/likes/like/1
router.post('/like/:postId', likeController.saveOrDelete);

module.exports = router;
