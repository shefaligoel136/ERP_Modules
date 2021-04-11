const express = require('express');
const app = express();

const port = process.env.PORT  || 7700 ;

// requiring mongoose db
const db = require('./config/mongoose');

// to use json
app.use(express.json());

app.use('/',require('./routes'));

app.listen(port,() => {
    console.log(`Connection Live! Server is running on port ${port}`);
})