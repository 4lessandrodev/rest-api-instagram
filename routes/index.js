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
//localhost:3000/signup
router.post('/signup', upload.any(), userController.save);

router.post('/signin');

router.get('/', function (req, res) {
  res.render('index', { title: 'Home' });
});
module.exports = router;
