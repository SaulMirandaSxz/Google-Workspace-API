// call server node index.js
// call client node client.js

const dotenv = require('dotenv');
dotenv.config();

const auth = process.env.API_KEY;
const express = require('express');
const axios = require('axios');
const { appendFile } = require('fs');




// Listen for requests

const port = process.env.PORT || 3000;
app.listen(port, () => 
console.log(`Listening on port ${port}...`)
);