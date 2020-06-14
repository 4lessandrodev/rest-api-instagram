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
//localhost:3000/users/signup
router.post('/signup', [
  check('credential', 'Headers credential is required').exists(),
  check('name', 'Name is required, min 1 and max 45 characters').isLength({ max: 45, min: 1 }),
], upload.any(), userController.save);

router.get('/signin', [
  check('credential', 'Headers credential is required').exists(),
]);

module.exports = router;
