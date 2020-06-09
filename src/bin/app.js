const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;
require('dotenv').config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database');
    }
  }
);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Siakad app listening on port ${port}!`));
