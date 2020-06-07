var express = require('express');
var router = express.Router();
var comentController = require('../controllers/comentController');

//PRIVATE ROUTES
//localhost:3000/coments/list/1?limit=5&page=1
router.get('/list/:postsId', comentController.list);

//localhost:3000/coments/save
router.post('/save', comentController.save);

router.delete('/delete', comentController.delete)

module.exports = router;
