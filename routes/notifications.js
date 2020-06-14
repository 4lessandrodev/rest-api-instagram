const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

//PRIVATE ROUTES
//http://localhost:3000/notifications/list?limit=5&page=1
router.get('/list', notificationController.list);

//http://localhost:3000/notifications/delete/1
router.delete('/delete/:id', notificationController.delete);

//http://localhost:3000/notifications/edit/1
router.put('/edit/:id', notificationController.edit);

module.exports = router;
