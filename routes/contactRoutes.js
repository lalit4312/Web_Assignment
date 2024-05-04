const router=require('express').Router();
const contactController=require('../controllers/contactController');

router.post('/contact',contactController.createContact)

module.exports=router;