const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db')

const routes =require('./routes/routes');
const equipment = require('./equipment/equipment')


var app = express();
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3001,()=>console.log('server started at 3001'));

app.use('/sports', routes)
app.use('/equipment',equipment)