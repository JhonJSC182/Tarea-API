const { MongoClient, Decimal128} = require('mongodb');
const uri = "mongodb+srv://jhonj182:1975elijah@cluster0.p0bfi5j.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function punto1 (){
    const database = client.db('sample_airbnb');
    const collection = await database.collection('listingsAndReviews');
    const result = await collection.find({bathrooms: { $gte: 2 } } ).toArray();
    return result;
}

async function punto2 (){
    const database = client.db('sample_airbnb');
    const collection = await database.collection('listingsAndReviews');
    const result = await collection.find({price: {$lte: 300}}).limit(500).toArray();
    return result;
}

async function punto3 (){
    const database = client.db('sample_airbnb');
    const collection = await database.collection('listingsAndReviews');
    const result = await collection.find({house_rules:{$eq:'No smoking'}}).toArray();
    return result;
}

async function punto4 (){
    const database = client.db('sample_airbnb');
    const collection = await database.collection('listingsAndReviews');
    const result = await collection.find({last_review:{$gte:new Date("2017-02-01"), $lt:new Date ("2018-12-23")}}).toArray();
    return result;
}

async function punto5 (){
    const database = client.db('sample_airbnb');
    const collection = await database.collection('listingsAndReviews');
    const result = await collection.find({$or:[{cancellation_policy:'flexible'},{cancellation_policy:'moderate'}]}).toArray();
    return result;
}

async function punto6 (){
    const database = client.db('sample_airbnb');
    const collection = await database.collection('listingsAndReviews');
    const result = await collection.find({$and:[{beds:6},{bedrooms:6}]}).toArray();
    return result;
}
module.exports = {
    punto1, punto2, punto3, punto4, punto5, punto6, punto7
}

async function punto7 (precio){
    const database = client.db('sample_airbnb');
    const collection = await database.collection('listingsAndReviews');
    const result = await collection.find({price:{$eq:new Decimal128(precio)}}).toArray();
    return result;
}
