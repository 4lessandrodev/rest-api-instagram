var express = require('express');
var router = express.Router();
var followerController = require('../controllers/followerController');

//PRIVATE ROUTES
//localhost:3000/followers/follow/1
router.post('/follow/:userId', followerController.saveOrDelete);

module.exports = router;