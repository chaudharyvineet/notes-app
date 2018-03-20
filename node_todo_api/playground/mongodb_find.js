//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
  if(err){
    return  console.log('enable to connect to MongoDB Server');
  }
  console.log('connected to MongoDB Server ');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5aae26b804515b1f9004a0be')
  // }).toArray().then((docs) => {
  // console.log('Todos');
  // console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  // console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "vineet"}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  });

  //db.close();
});
