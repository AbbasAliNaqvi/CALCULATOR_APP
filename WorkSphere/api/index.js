const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;

// Debugging the loaded URI
console.log("MONGO_URI:", mongoURI);

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("CONNECTED TO MongoDB");
}).catch((error) => {
    console.log("ERROR CONNECTING TO MongoDB", error);
});

app.listen(port, () => {
    console.log("SERVER IS RUNNING ON PORT", port);
});