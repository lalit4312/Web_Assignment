const router = require('express').Router();
const appoinmentController = require('../controllers/appoinmentController');

router.post('/appoints', appoinmentController.createAppoinment)

module.exports = router;