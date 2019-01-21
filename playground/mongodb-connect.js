// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');  // this syntax used object destructuring

MongoClient.connect('mongodb://localhost:27017/Todos', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     };
    //     console.log(JSON.stringify(result.ops, undefined, 4));

    // })

    // db.collection('Users').insertOne({
    //     name: 'DougyD',
    //     age: 33,
    //     location: 'Rochester'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user');
    //     };
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    // })
    
    client.close();
});