const express = require('express');
const router = express.Router();
const followerController = require('../controllers/followerController');

//PRIVATE ROUTES
//http://localhost:3000/followers/follow/1
router.post('/follow/:userId', followerController.saveOrDelete);

//http://localhost:3000/followers/listfollowing?limit=10&page=1
router.get('/listfollowing', followerController.listfollowing);

//http://localhost:3000/followers/listfollowers?limit=10&page=1
router.get('/listfollowers', followerController.listfollowers);

//http://localhost:3000/followers/listfollowers/1
router.get('/listfollowers/:id', followerController.find);

module.exports = router;