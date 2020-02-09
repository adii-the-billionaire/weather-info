const mongodb = require('mongodb')
    //const mongoose = require('mongoose')
    //const connect = require('connect')


const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'taskmanager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'adii',
        age: 20,
    })
    console.log('Connected correctly!')
})