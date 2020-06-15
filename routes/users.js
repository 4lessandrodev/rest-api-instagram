const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('.', 'public', 'images', 'avatar'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + (String(file.originalname).replace(' ', '')));
  }
});
var upload = multer({ storage: storage });
//--------------------------------------------------------------------

//PRIVATE ROUTES
//localhost:3000/users/edit
router.put('/edit', upload.any(), userController.edit);

//http://localhost:3000/users/delete
router.delete('/delete', userController.delete);

//http://localhost:3000/users/list?limit=10&page=1
router.get('/list', userController.list);

//http://localhost:3000/users/list/Jane
router.get('/list/:name', userController.findByName);

//http://localhost:3000/users/1
router.get('/find/:id', userController.findById);

module.exports = router;
