const mongoclient = require('../database/connection')


const insertToBollywoodDB = async(req,res)=>{
    const bollywoodData = req.body;
    try {
      const result = await mongoclient.insertToBollywoodDB(bollywoodData);
      console.log('db response' , result);
     return res.status(200).send(result);
    } catch (error) {
        console.log('errors is here' , error.message);
        res.status(500).send({message : 'some error occred in between'});
    }
}
const findInBollwoodData = async(req,res)=>{
    try {
      const result = await mongoclient.findInBollwoodData();
      console.log('db response' , result);
     return res.status(200).send(result);
    } catch (error) {
        console.log('errors is here' , error.message);
        res.status(500).send({message : 'some error occred in between'});
    }
}



module.exports = {
    insertToBollywoodDB,
    findInBollwoodData,
    
}