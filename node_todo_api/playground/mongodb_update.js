//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
  if(err){
    return  console.log('enable to connect to MongoDB Server');
  }
  console.log('connected to MongoDB Server ');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aae517c23e466b72b4b3616')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aae544523e466b72b4b3796')
  }, {
    $set: {
      name: "vipul"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //db.close();
});
