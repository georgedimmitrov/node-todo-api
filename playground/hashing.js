const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// hashing + salt + man in the middle attack example
// const message = 'i am user number 3';
// const hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// const data = {
//   id: 4
// };

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // Man in the middle attacks -> They do not have  the salt.
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('OK. Data was not changed');
// } else {
//   console.log('NOT OK. Data was changed');
// }

const data = {
  id: 10
};

// const token = jwt.sign(data, '123abc');
// console.log('token', token);
// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);


const password = '123abc!';
// unhashed -->  hashed
// 'password1' -> 'mmnn' // password without salt
// 'password1898989' -> '..' // password with salt

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hashedValue) => {
//     console.log(hashedValue);
//   });
// });

const hashedPassword = '$2a$10$k7tSKomo6n2HeAS5woVQ3u2ZAaGdbBYbQmANW.w1GhlcEkK1Jk/Xe';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
