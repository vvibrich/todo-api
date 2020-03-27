const { model, Schema } = require('mongoose');

const todoSchema = new Schema({
  description: { type: String, required: true },
  completed: { type: String, required: true },
  createdAt: {type: Date},
  updatedAt: {type: Date}
  
  }, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}

  });

module.exports = model('todos', todoSchema);
