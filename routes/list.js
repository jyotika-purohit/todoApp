const express=require('express');
const router=express.Router();
const listController=require('../controllers/list_Controller');
router.get('/list',listController.list);
module.exports=router;