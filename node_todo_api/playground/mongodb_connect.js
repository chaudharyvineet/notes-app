//const MongoClient = require('mongodb').MongoClient;

<!-- object destructuring -->
// var user = {name: 'vineet', age: 19};
// var {name} = user;
// console.log(name);

<!-- requiring mongoclient using destructuring works same as line 1 -->
const {MongoClient,ObjectID} = reqire('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
  if(err){
    return  console.log('enable to connect to MongoDB Server');
  }
  console.log('connected to MongoDB Server ');

//   db.collection('Todos').insertOne({
//     text: 'something to do',
//     completed: false
//   }, (err, result) => {
//     if(err){
//       return console.log('unable to insert todo', err);
//     }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

  db.collection('Users').insertOne({
    name: 'vineet chaudhary',
    age: 19,
    location: 'Chandigarh India'
  }, (err,result) => {
    if(err) {
      return console.log('unable to insert user',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
});



  db.close();
});
