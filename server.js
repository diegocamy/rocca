const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

//MONGO DB CONNECTION
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to db!')
);

const PORT = process.env.PORT || 5000;

//MIDDLEWARES
app.use(cors());

//ROUTES
app.get('/', (req, res) => res.send('HOLA'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
