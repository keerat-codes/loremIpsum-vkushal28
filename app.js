const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8009;

require('dotenv').config();

const pringlesRoute = require('./routes/pringles');
const makePringles  = require('./controllers/makePringles');
const banana chipsRoute = require('./routes/banana chips');
const test  = require('./controllers/test');
const asfas  = require('./controllers/asfas');
app.use('/asdas', asfas);
app.use('/asfas', test);
app.use('/banana chips', banana chipsRoute);
const test controller  = require('./controllers/test controller');
app.use('/controller', test controller);
app.use('/pringles/sourCream', makePringles);
app.use('/pringles', pringlesRoute);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conn = require('./middlewares/connection');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;