<!-- requiring libraries -->
var express = require('express');
var bodyParser = require('body-parser');

<!-- requiring local files -->
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

<!-- initializing app -->
var app = express();

<!-- bodyparser to convert json using middleware -->
app.use(bodyParser.json());

<!-- sending data to server using post -->
app.post('/todos', (req,res) => {
var todo = new Todo ({
  text: req.body.text
});

 todo.save().then((doc) => {
 res.send(doc);
 }, (e) => {
 res.status(400).send(e);
 });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});



<!-- these modules are in user.js and todo.js files -->
// var mongoose = require('mongoose');
//
// mongoose.Prommise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
//
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// var todoo = new Todo({
//   text: '    Eat dinner and sleep   '
//   //completed: true,
//   //completedAt: 10
// });
//
// todoo.save().then((doc) => {
//  console.log('saved todo', doc);
// }, (e) => {
//   console.log('unable to save todo');
// });
//
// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// var user = new User({
// email: '   vineetchudhary131@gmail.com  '
// });
//
// user.save().then((doc) => {
//  console.log('saved user', doc);
// }, (e) => {
//   console.log('unable to save this user');
// });
//
//
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//  console.log('saved todo', doc);
// }, (e) => {
//   console.log('unable to save todo');
// });
