const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

const id = '59aa8b26c2c45c3a0f6f79ee';
const userId = '59aa7a27115351e60a2a5054';

if (!ObjectID.isValid(id)) {
  return console.log('Id not valid.');
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo by id', todo);
// }).catch(e => console.log(e));

User.findById(userId).then(user => {
  if (!user) {
    return console.log('Id not found.');
  }
  console.log(JSON.stringify(user, '', 2));
}).catch(e => console.log(e));
