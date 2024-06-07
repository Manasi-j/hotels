const express = require('express')
const db = require('./db');
const app = express();


//We dont know what type of data will we get so we deal with json data 
//we use bodyParser.json()
//If we the data is different then we use different body parsers as per need 
const bodyParser = require('body-parser');
const { applyDefaults } = require('./models/menu');
app.use(bodyParser.json());//it will parse the data and it will store the parsed data 
//into (req.body) object

app.get('/', (req, res) => {
    res.send("Welcome to my hotel and we are we are happy to serve you");

})
//import router d=files 
const empRouter = require('./routes/employeesRouts');
const menuRouter = require('./routes/menuRouts');

//use the routers
app.use('/employees',empRouter);
app.use('/menuItems',menuRouter);



app.listen(3000,()=>{
    console.log('listening on port 3000');
})






