require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnect } = require('../config/mongo');

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('../app/routes'));

dbConnect();

// Do NOT call app.listen() on Vercel
module.exports = app;