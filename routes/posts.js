const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('.','public','images','posts'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + (String(file.originalname).replace(' ', '')));
  }
});
var upload = multer({ storage: storage });
//--------------------------------------------------------------------

//PRIVATE ROUTES
//http://localhost:3000/posts/save
router.post('/save', upload.any(), postController.save);

//http://localhost:3000/posts/list?limit=10&page=1
router.get('/list', postController.list);

//http://localhost:3000/posts/find/1
router.get('/find/:id', postController.findById);

//http://localhost:3000/posts/edit/1
router.put('/edit/:id', upload.any(), postController.edit);

//http://localhost:3000/posts/delete/1
router.delete('/delete/:id', postController.delete);


module.exports = router;
