const connectToMongo=require('./db');
const express = require('express');
connectToMongo();
var app = express()
var cors = require('cors')
app.use(cors())
const port = 5000
app.use( express.json());

//routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/transaction/',require('./routes/transaction'))


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })