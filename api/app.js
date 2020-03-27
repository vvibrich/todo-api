const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

  // Mongoose connection
  const mongoUrl = config.get('mongoUrl');

  mongoose.connect(mongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
  }).catch(() => {
    console.error('Unable to connect to MongoDB');
  });

  // Body parser
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req,res)  => {
  res.redirect('/todos')
});  

app.use('/todos', todoRoutes);


app.use((err, req, res, next) => {
  const formatError = ({ message, path, value }) => ({
    error: message,
    name: err.name,
    path,
    value,
  });

  switch (err.name) {
    case 'ValidationError':
      res.status(422).send(Object.values(err.errors)
        .map(val => formatError(val)));
      break;
    case 'CastError':
      res.status(422).send(formatError(err));
      break;
    case 'RequestValidationError':
      res.status(422).send(err.array());
      break;
    case 'NotFoundError':
      res.status(404).send(err);
      break;
    default:
      next(err);
  }
});

app.use((err, req, res, next) => {
  if (err.name === 'MongoError' && err.code === 11000) {
    res.status(422).send({
      message: err.message,
      name: err.name,
    });
  } else {
    next(err);
  }
});

module.exports = app;
