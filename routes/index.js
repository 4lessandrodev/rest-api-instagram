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

//PUBLIC ROUTES
//http://localhost:3000/register
router.post('/register', upload.any(), userController.save);

//http://localhost:3000/login
router.post('/login', userController.login);

//http://localhost:3000/logout
router.get('/logout', userController.logout);

//http://localhost:3000/
router.get('/', function (req, res) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
