var express = require('express');
var router = express.Router();
var followerController = require('../controllers/followerController');

//PRIVATE ROUTES
//localhost:3000/followers/follow/1
router.post('/follow/:userId', followerController.saveOrDelete);

//localhost:3000/followers/listfollowing?limit=10&page=1
router.get('/listfollowing', followerController.listfollowing);

//localhost:3000/followers/listfollowers?limit=10&page=1
router.get('/listfollowers', followerController.listfollowers);

module.exports = router;