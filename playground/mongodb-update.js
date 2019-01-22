// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');  // this syntax used object destructuring

MongoClient.connect('mongodb://localhost:27017/Todos', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //         { _id: new ObjectID('5c450c9468588b3d20e75623') },
    //         { $set: { completed: true } },
    //         { returnOriginal: false })
    //     .then( (result) => {
    //         console.log(result);
    //     });
    
    db.collection('Users')
    .findOneAndUpdate(
        { _id: new ObjectID('5c45cd71e03ffd04dc92b14d') },
        { $set: { name: 'Wapper' },  $inc: { age: 1 } },
        { returnOriginal: false })
    .then( (result) => {
        console.log(result);
    });

    // client.close();
});