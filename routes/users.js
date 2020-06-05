var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');


//PRIVATE ROUTES
//localhost:3000/users/save
router.post('/save', userController.save);

//localhost:3000/users/edit/1
router.put('/edit/:id', userController.edit);

//localhost:3000/users/delete/1
router.delete('/delete/:id', userController.delete);

//localhost:3000/users/list?limit=10
router.get('/list', userController.list);

module.exports = router;
