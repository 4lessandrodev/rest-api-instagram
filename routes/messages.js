var express = require('express');
var router = express.Router();
var messageController = require('../controllers/messageController');

//PRIVATE ROUTES
//localhost:3000/messages/save
router.post('/save', messageController.save);

//localhost:3000/messages/edit/1
router.put('/edit/:id', messageController.edit);

//localhost:3000/messages/delete/1
router.delete('/delete/:id', messageController.delete);

//localhost:3000/messages/list?limit=10&page=1
router.get('/list/:receiverId', messageController.list);

module.exports = router;