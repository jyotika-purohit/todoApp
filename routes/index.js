const express=require('express');
const router=express.Router();

const home_Controller=require('../controllers/home_Controller')
router.get('/',home_Controller.home);
router.use('/my',require('./list'));

module.exports=router;