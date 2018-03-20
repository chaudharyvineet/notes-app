//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
  if(err){
    return  console.log('enable to connect to MongoDB Server');
  }
  console.log('connected to MongoDB Server ');

  //deleteMany
//  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//    console.log(result);
//  });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// findOneandDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

<!-- user challlenge -->
// db.collection('Users').deleteMany({name: 'vineet'}).then((result) => {
//    console.log(result);
//  });

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5aae32ad23e466b72b4b3346')
}).then((result) => {
  console.log(JSON.stringify(result, undefined ,2));
});
  //db.close();
});
