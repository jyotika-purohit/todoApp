const mongoose=require('mongoose');

const todoListSchema=new mongooseSchema({
    taskName={
        type:String,
        required:true,
    },
    todoDate={
        type:Date,
        required:true
    },
    flagged={
        type:Boolean,
        default:false
    },
    isDone={
        type:Boolean,
        default:false
    },
    category={
        type:String,
        required:true
    }
});

const task=mongoose.model('tasks',todoListSchema);

module.exports=tasks;