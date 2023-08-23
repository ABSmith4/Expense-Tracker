import mongoose from 'mongoose';

const Expenses = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  amount: {
    type: Number,
    required: true,
    maxLength: 20,
    trim: true
  },
  type: {
    type: String,
    default: 'expense'
  },
  date: {
    type: Date,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    maxLength: 20,
    trim: true
  },

}, {timestamps: true})

const expenseModel = mongoose.model('Expenses', Expenses)
export { expenseModel }