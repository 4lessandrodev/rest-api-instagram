var express = require('express');
var router = express.Router();
var comentController = require('../controllers/comentController');

//PRIVATE ROUTES
//localhost:3000/coments/list/1?limit=5&page=1
router.get('/list/:postsId', comentController.list);

//localhost:3000/coments/save
router.post('/save', comentController.save);

//localhost:3000/coments/delete/1
router.delete('/delete/:id', comentController.delete);

//localhost:3000/coments/edit/1
router.put('/edit/:id', comentController.edit);

module.exports = router;
