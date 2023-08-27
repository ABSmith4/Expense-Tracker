import express from 'express';

import { deleteExpense, addExpense, getExpense } from "../../controllers/expense.controller.js";
import { getIncome, addIncome, deleteIncome } from "../../controllers/income.controller.js";

const router = express.Router();

router.get('/get-income', getIncome)
  .get('/get_expenses', getExpense)
  .post('/add-income', addIncome)
  .post('/add-expense', addExpense)
  .delete('/delete-income/:id', deleteIncome)
  .delete('/delete-expense/:id', deleteExpense);

export default router;