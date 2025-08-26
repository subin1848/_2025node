const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');

router.get('/', travelController.getTravelList);

router.get('/add', travelController.getAddTravelForm);

router.post('/', travelController.getAddTravel);

router.get('/:id', travelController.getTravelDetail);

router.get('/:id/edit', travelController.getEditTravelForm);

router.put('/:id', travelController.updateTravel);

router.delete('/:id', travelController.deleteTravel);

module.exports = router;