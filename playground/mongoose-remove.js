const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove({ _id: '59aac4cd9db841069e06d21e' }).then(todo => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('59aac4cd9db841069e06d21e').then(todo => {
  console.log(todo);
});
