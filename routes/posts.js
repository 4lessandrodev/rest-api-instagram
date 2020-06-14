const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { check, validationResult } = require('express-validator');

//PRIVATE ROUTES
//http://localhost:3000/posts/save
router.post('/save', [
  check('image', 'Image is required').isArray()
], postController.save);

//http://localhost:3000/posts/list?limit=10&page=1
router.get('/list', postController.list);

//http://localhost:3000/posts/find/1
router.get('/find/:id', postController.findById);

//http://localhost:3000/posts/edit/1
router.post('/edit/:id', [
  check('image', 'Image is required').isArray()
], postController.edit);

//http://localhost:3000/posts/delete/1
router.delete('/delete/:id', postController.delete);


module.exports = router;
