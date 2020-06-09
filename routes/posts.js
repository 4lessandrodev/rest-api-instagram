var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

//PRIVATE ROUTES
//localhost:3000/posts/save
router.post('/save', postController.save);

//localhost:3000/posts/list?limit=10&page=1
router.get('/list', postController.list);

//localhost:3000/posts/find/1
router.get('/find/:id', postController.findById);

//localhost:3000/posts/edit/1
router.post('/edit/:id', postController.edit);

//localhost:3000/posts/delete/1
router.delete('/delete/:id', postController.delete);


module.exports = router;
