const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
<<<<<<< HEAD
const player=require('./routes/player.js');
const sports=require('./routes/sports.js');
const equipment=require('./routes/equipment.js');
const  admin  = require('./routes/admin.js');
=======
const player=require('./routers/players.js');
const sports=require('./routers/sports.js');
const equipment=require('./routers/equipment.js');
const  admin  = require('./routers/admin.js');
>>>>>>> 400dfb6219ef85c382e365b22e3486df211ccc17

const app = express();
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000, ()=>console.log('server started at port: 3000'));
app.use('/player',player);
app.use('/sports',sports);
app.use('/equipments',equipment);
app.use('/admin',admin);
