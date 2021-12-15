const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const db = require("./db/conn");
const { ObjectID } = require('bson');
const dbName = "db-name";
const collectionName = "users";
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3001;



