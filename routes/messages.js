const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { check, validationResult } = require('express-validator');

//PRIVATE ROUTES
//http://localhost:3000/messages/save/1
router.post('/save/:receiverId', [
  check('text','Text is required, min 1 and max 250 character').isLength({min:1, max:250})
], messageController.save);

//http://localhost:3000/messages/edit/1
router.put('/edit/:id', [
  check('text', 'Text is required, min 1 and max 250 character').isLength({ min: 1, max: 250 })
], messageController.edit);

//http://localhost:3000/messages/delete/1
router.delete('/delete/:id', messageController.delete);

//http://localhost:3000/messages/list/1?limit=10&page=1
router.get('/list/:receiverId', messageController.list);

module.exports = router;