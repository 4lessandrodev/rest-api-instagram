const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check, validationResult } = require('express-validator');

//PRIVATE ROUTES
//localhost:3000/users/save
router.post('/save', [
  check('email', 'Invalid email').isEmail(),
  check('name', 'Name is required, min 1 and max 45 characters').isLength({ max: 45, min: 1 }),
  check('password', 'Password is required, min 1 and max 15 characters').isLength({ max: 15, min: 1 })
], userController.save);

//localhost:3000/users/edit
router.put('/edit', [
  check('email', 'Invalid email').isEmail(),
  check('name', 'Name is required, min 1 and max 45 characters').isLength({ max: 45, min: 1 }),
],userController.edit);

//http://localhost:3000/users/delete
router.delete('/delete', userController.delete);

//http://localhost:3000/users/list?limit=10&page=1
router.get('/list', userController.list);

//http://localhost:3000/users/list/Jane
router.get('/list/:name', userController.findByName);

//http://localhost:3000/users/1
router.get('/find/:id', userController.findById);

module.exports = router;
