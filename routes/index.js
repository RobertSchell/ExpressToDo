const express = require('express');
const router = express.Router();

const Task = require('../models/Tasks');

/* GET home page. */
router.get('/', async function(req, res, next) {

  //query tasks 
  try {
    const allTasks = await Task.find({});
    res.json({ tasks: allTasks });
  }catch(e){
    console.log(e);
  }
});

module.exports = router;
