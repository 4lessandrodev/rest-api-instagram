var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

//localhost:3000/users/save
router.post('/save', userController.save);

//localhost:3000/users/edit/1
router.put('/edit/:id', userController.save);

module.exports = router;
