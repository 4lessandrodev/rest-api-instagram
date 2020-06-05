var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

//localhost:3000/save
router.post('/save', userController.save);

module.exports = router;
