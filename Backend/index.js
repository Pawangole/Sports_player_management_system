const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const player=require('./routers/players.js');
const sports=require('./routers/sports.js');
const equipment=require('./routers/equipment.js');
const  admin  = require('./routers/admin.js');

const app = express();
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000, ()=>console.log('server started at port: 3000'));
app.use('/player',player);
app.use('/sports',sports);
app.use('/equipments',equipment);
app.use('/admin',admin);
