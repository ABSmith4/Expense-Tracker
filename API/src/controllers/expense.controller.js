import { expenseModel } from "../models/expenses.models";

export async function addExpense(req, res) {
  const { title, amount, category, description, date } = req.body;

  const expense = expenseModel({
    title,
    amount,
    category,
    description,
    date,
  })

  try {
    if(!title || !category || !description || !date) {
      return res.status(400).json({message: 'All entry fields are required!'});
    }
    if(amount <= 0 || (isNAN(amount))) {
      return res.status(400).json({message: 'Amount must be a positive value!'})
    }
    await expense.save()
    res.status(200).json({message: 'Your new expense has been added.'})
  } catch (error) {
    return res.status(500).json({error: error.message, message: 'Internal Server Error'})
  }
  console.log(expense)
}

export async function getExpense(req, res) {
  try{
    const foundExpense = await expenseModel.find().sort({createdAt: -1})
    return res.status(200).json(foundExpense)
  } catch (error) {
    return res.status(500).json({message: 'Server Error'})
  }
}

export async function deleteExpense(req, res) {
  const { id } = req.params;
  try {
    await expenseModel.findByIdAndDelete(id)
    res.status(200).json({message: 'Expense deleted'})   
  } catch (error) {
    return res.status(500).json({message: 'Server Error'})
  }
}