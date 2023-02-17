const Task = require('../models/Tasks');

// POST create one task
async function createOneTask(req, res, next) {
  try {
    const name  = req.body.name 
    const description = req.body.description 
    const completed = req.body.completed
    const status =  req.body.status

    const newTask = new Task({
      name,
      description,
      completed,
      status
    });
 
    const savedData =  await newTask.save();
     
    res.json({
      success: true,
      tasks: savedData
    });

  } catch (e) {
    console.log(typeof e);
    console.log(e);
    res.json({
    error: e.toString(),
    });
  }
};


// PUT update one task by ID
async function updateOneTask(req, res) {
  if (!req.params._id) {
    res.json({
      success: false,
      message: "No name provided"
    });
    return;
  }

  try {
    const taskUpdate = await Task.findOneAndUpdate(
      {id: req.params._id},
      {
        $set: {
              name: req.body.name, 
              description: req.body.description, 
              completed: req.body.completed,
              dateCompleted: new Date(),
              status: req.body.status
              },
      },
        { new: true }
    );
      res.json({
        success: true,
        post: taskUpdate
      });
  
  } catch (e) {
    console.log(e);
  }
};


// DELETE single task by id  
async function deleteTaskById(req, res) {
  try {
    const deleteTask = await Task.deleteOne({id: req.params._id})
    res.json({ tasks: deleteTask });
  
  } catch (e) {
    console.log(e);
    throw err;  
    }
};


// DELETE multiple completed tasks
async function deleteMultipleTasks(req, res) {
  try {
  const deletedMulti = await Task.deleteMany({"completed": true})
  res.json({ deletedMulti });
  
  } catch (e) {
    console.log(e);
    }
};


// CREATE multiple tasks
async function createMultipleTasks(req, res) {
  try {
    const newTasks = req.body;
    const addedTasks =  await Task.insertMany(newTasks);
    res.json({ success: true, tasks: addedTasks });
  
  } catch (e) {
    console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
  }
};


// GET all tasks
async function getAllTasks(req, res) {
  try {
    const allTasks = await Task.find({});
    res.json({tasks: allTasks });
  
  } catch(e){
    console.log(e);
  }
};


module.exports = {
  createOneTask,
  updateOneTask,
  deleteTaskById,
  deleteMultipleTasks,
  createMultipleTasks,
  getAllTasks,    
};
