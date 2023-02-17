const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

// CRUD routes (create = POST, read = GET, update = UPDATE, delete = DELETE)
router.post('/create-one', tasksController.createOneTask);
router.put('/update-one/:_id', tasksController.updateOneTask);
router.delete('/delete/:_id', tasksController.deleteTaskById);
router.delete('/delete-multiple', tasksController.deleteMultipleTasks);
router.post('/create-multiple', tasksController.createMultipleTasks);
router.get('/all',tasksController.getAllTasks);

module.exports = router;
