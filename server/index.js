const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const route = require('./Routes/Routes')


app.use(express.json());
app.use(cors())

app.use('/',route)

///// connecting to database ///////
mongoose.connect('mongodb://localhost:27017')
    .then(console.log('connceted'))
    .catch(err => console.log(err))



app.listen(3001, () => console.log('connection successfull...'));
