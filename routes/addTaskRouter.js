const express=require('express');
const router=express.Router();
const addTaskController=require('../controllers/addTaskController');
router.use('/addTask',listController.newList);
module.exports=router;