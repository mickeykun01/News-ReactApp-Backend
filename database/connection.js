const {MongoClient} = require('mongodb');

const url = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@e-commerce.c7nmvuz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// bollywood datas ...
const insertToBollywoodDB = async (data)=>{
    try {
        const database = client.db('BlogPage');
        const collection = database.collection('bollywoods');
        await client.connect();
        const dbResponse = await collection.insertMany(data);
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;        
    }
}
const findInBollwoodData = async ()=>{
    try {
        const database = client.db('BlogPage');
        const collection = database.collection('bollywoods');
        await client.connect();
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;        
    }
}

//fitness datas ..
const findInFitnessData = async ()=>{
    try {
        const database = client.db('BlogPage');
        const collection = database.collection('fitnesses');
        await client.connect();
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;        
    }
}
//food data..
const findInFoodData = async ()=>{
    try {
        const database = client.db('BlogPage');
        const collection = database.collection('foods');
        await client.connect();
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;        
    }
}

//hollywood data ..
const findInHollywoodData = async ()=>{
    try {
        const database = client.db('BlogPage');
        const collection = database.collection('hollwoods');
        await client.connect();
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;        
    }
}

//home data ..
const findInHomeData = async ()=>{
    try {
        const database = client.db('BlogPage');
        const collection = database.collection('homes');
        await client.connect();
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;        
    }
}

//technology data ..
const findInTechnologyData = async ()=>{
    try {
        const database = client.db('BlogPage');
        const collection = database.collection('technologies');
        await client.connect();
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;        
    }
}

module.exports = {
    insertToBollywoodDB,
    findInBollwoodData,
    findInFitnessData,
    findInFoodData,
    findInHollywoodData,
    findInHomeData,
    findInTechnologyData
}
