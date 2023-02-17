//import mongoose library
const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

//create a taskSchema
const taskSchema = new mongoose.Schema({
    id: {type: String, default: uuidv4},
    name: {type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true, default: false},
    dateCreated: {type: Date, default: Date.now},
    dateCompleted: {type: Date},
    status: { type: String, enum: ['incomplete', 'complete', 'deferred'],default: 'incomplete'},
});

const Task = mongoose.model("sample_tasks", taskSchema);

module.exports = Task;
