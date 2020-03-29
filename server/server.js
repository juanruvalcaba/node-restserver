require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
const app = express()

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }, (err, resp) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});
//mongoose.connect('mongodb://localhost:27017/cafe',);
app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${ process.env.PORT }`);
})