const db=require('../config/mongoose');
const task=require('../models/todoApp');


module.exports.newList=function(req,res){
    task.create({
        taskName:req.body.todoName,
        todoDate:req.body.todoDate,
        category:req.body.category

    },function(err,task){
        if(err){
            console.log(`Error ${err} occurred`);
            return;
        }

        return res.render('list',{
            title:'Tasks',
            tasks:task
        });
    });
}