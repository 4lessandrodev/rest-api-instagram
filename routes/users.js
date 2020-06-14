const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check, validationResult } = require('express-validator');
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
//localhost:3000/users/save
router.post('/save', [
  check('email', 'Invalid email').isEmail(),
  check('name', 'Name is required, min 1 and max 45 characters').isLength({ min: 1, max: 45 }),
  check('password', 'Password is required, min 1 and max 15 characters').isLength({ min: 1, max: 15 })
], upload.any(), userController.save);

//localhost:3000/users/edit
router.put('/edit', [
  check('email', 'Invalid email').isEmail(),
  check('name', 'Name is required, min 1 and max 45 characters').isLength({ min: 1, max: 45 }),
], upload.any(), userController.edit);

//http://localhost:3000/users/delete
router.delete('/delete', userController.delete);

//http://localhost:3000/users/list?limit=10&page=1
router.get('/list', userController.list);

//http://localhost:3000/users/list/Jane
router.get('/list/:name', userController.findByName);

//http://localhost:3000/users/1
router.get('/find/:id', userController.findById);

module.exports = router;
