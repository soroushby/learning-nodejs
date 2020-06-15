const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const tourController = require('./../controllers/tourController.js');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`tour id is : ${val}`);
  next();
});
router.get('/:id', tourController.getTour);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.creatTour);

module.exports = router;
