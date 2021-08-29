const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config');

const app = express();
// importing routes
const routes = require('./routes');

// routes
app.use(cors());
app.use('/', routes);

const port = config.serverPort;

app.listen(port, () => {
  console.log(`Server running on port ${port}`, new Date());
});