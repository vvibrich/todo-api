const {
  body, param, query, sanitizeBody,
} = require('express-validator');

const Todo = require('../models/todoModel');
const { responseHandler, throwValidationResults } = require('../middlewares/common');
const cache = require('../middlewares/cache');

const todoController = {
  findAllTodos: [
    cache.get,

    query('limit').toInt(),
    query('offset').toInt(),

    (req, res, next) => {
      Todo.find({}, {}, {
        skip: req.query.offset,
        limit: req.query.limit,
      })
        .then((todos) => {
          res.locals.data = todos;

          next();
        })
        .catch(next);
    },

    cache.set,

    responseHandler,
  ],
  findTodoById: [
    cache.get,

    param('id').isMongoId(),

    throwValidationResults,

    (req, res, next) => {
      Todo.findById(req.params.id)
        .then((todo) => {
          if (!todo) {
            const err = new Error('Todo not found for the given ObjectId');
            err.name = 'NotFoundError';
            throw err;
          }

          res.locals.data = todo;

          next();
        })
        .catch(next);
    },

    cache.set,

    responseHandler,
  ],
  createTodo: [

    throwValidationResults,

    (req, res, next) => {
      Todo.create(req.body)
        .then((todo) => {
          res.locals.data = todo;

          next();
        })
        .catch(next);
    },

    cache.clear,

    responseHandler,
  ],
  updateTodo: [
    param('id').isMongoId(),

    throwValidationResults,

    (req, res, next) => {
      const { id } = req.params;
      const replacement = req.body;
      const options = {
        new: true,
        useFindAndModify: false,
      };

      Todo.findByIdAndUpdate(id, replacement, options)
        .then((todo) => {
          if (!todo) {
            const err = new Error('Todo not found for the given ObjectId');
            err.name = 'NotFoundError';
            throw err;
          }

          res.locals.data = todo;

          next();
        })
        .catch(next);
    },

    cache.clear,

    responseHandler,
  ],
  deleteTodo: [
    param('id').isMongoId(),

    throwValidationResults,

    (req, res, next) => {
      Todo.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(204);
          res.locals.data = {};

          next();
        })
        .catch(next);
    },

    cache.clear,

    responseHandler,
  ],
};

module.exports = todoController;
