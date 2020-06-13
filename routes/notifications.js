var express = require('express');
var router = express.Router();
var notificationController = require('../controllers/notificationController');

//PRIVATE ROUTES
//localhost:3000/notifications/list/1?limit=5&page=1
router.get('/list', notificationController.list);

//localhost:3000/notifications/delete/1
router.delete('/delete/:id', notificationController.delete);

//localhost:3000/notifications/edit/1
router.put('/edit/:id', notificationController.edit);

module.exports = router;
