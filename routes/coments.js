const express = require('express');
const router = express.Router();
const comentController = require('../controllers/comentController');
const { check, validationResult } = require('express-validator');

//PRIVATE ROUTES
//http://localhost:3000/comments/list/1?limit=5&page=1
router.get('/list/:postId', comentController.list);

//http://localhost:3000/coments/save
router.post('/save/:postId', [
  check('text', 'Text is required, min 1 and max 250 character').isLength({min:1, max:250})
], comentController.save);

//http://localhost:3000/comments/delete/1
router.delete('/delete/:id', comentController.delete);

//http://localhost:3000/comments/edit/1
router.put('/edit/:id', [
  check('text', 'Text is required, min 1 and max 250 character').isLength({ min: 1, max: 250 })
], comentController.edit);

module.exports = router;
