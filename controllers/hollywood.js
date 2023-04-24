const mongoclient = require('../database/connection');


const findInHollywoodData = async(req,res)=>{
    try {
      const result = await mongoclient.findInHollywoodData();
      console.log('db response' , result);
     return res.status(200).send(result);
    } catch (error) {
        console.log('errors is here' , error.message);
        res.status(500).send({message : 'some error occred in between'});
    }
}

module.exports = {
    findInHollywoodData,
}