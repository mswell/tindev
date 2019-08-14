const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes');

const server = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);