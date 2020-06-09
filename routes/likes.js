var express = require('express');
var router = express.Router();
var likeController = require('../controllers/likeController');

//PRIVATE ROUTES
//localhost:3000/like/save
router.post('/save', likeController.save);
