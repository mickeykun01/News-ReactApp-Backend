const Dotenv = require('dotenv');
Dotenv.config();
const express = require('express');
const cors = require('cors');
const PORT = 5000
const bodyparser = require('body-parser');
const home = require('./routes/home')
const bollywood = require('./routes/bollywood');
const fitness = require('./routes/fitness');
const food = require('./routes/food');
const hollywood = require('./routes/hollywood');
const technology = require('./routes/technology');

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use('/', home)
app.use('/' , bollywood)
app.use('/', fitness)
app.use('/', food)
app.use('/', hollywood)
app.use('/', technology)


app.listen(PORT ,  ()=>{
    console.log('server is running on port 5000');
    
})

 