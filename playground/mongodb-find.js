// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');  // this syntax used object destructuring

MongoClient.connect('mongodb://localhost:27017/Todos', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //     .find( { 
    //         _id: new ObjectID('5c4513efc27f83467cce9860') } ) // this will just return a cursor to a result set
    //     .toArray()
    //     .then( (docs) => {
    //         console.log('Todos:');
    //         console.log(JSON.stringify(docs, undefined, 4));
    //     }, (err) => {
    //         console.log('Unable to retrieve todos');
    //     }); 

    // db.collection('Todos')
    //     .find().count().then( (count) => {
    //         console.log(`Todos: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to count todos');
    //     }); 

    db.collection('Users')
        .find({name: 'DougyD'}).toArray().then( (users) => {
            console.log(`${users.length} users found:`);
            console.log(JSON.stringify(users, undefined, 4));
        }, (err) => {
            console.log('Unable to get user');
        }); 

    
    // client.close();
});