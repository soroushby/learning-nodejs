const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const userController = require('./../controllers/userController.js');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.creatUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
