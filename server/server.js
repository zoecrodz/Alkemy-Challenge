const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./db');
const volleyball = require('volleyball');
const api = require('./routes');

app.use(volleyball);
app.use(
  cors({
    origin:true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/api', api);

sequelize.sync({ force: false}).then(() => {
    app.listen(3001, () => {
      console.log(`Server listening at port 3001`);
    });
  });