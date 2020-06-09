const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors');
const log = require('morgan');
const app = express();
const port = process.env.PORT || 8080;
require('dotenv').config();

app.use(cors());
app.use(log('dev'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

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

app.get('/', (req, res) => res.send(' Welcome To SIKAD TELKOM V2 '));

app.use('/api', require('../apis/index'));

app.get('*', (req, res) => {
  res.json({
    message: 'url: ' + req.url + ' not found',
    error: 'NoPathExist',
    code: 404,
  });
});
app.listen(port, () => console.log(`Siakad app listening on port ${port}!`));
