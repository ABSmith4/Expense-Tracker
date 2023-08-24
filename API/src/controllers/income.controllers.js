import { incomeModel } from "../models/Income.models";

export async function addIncome(req, res) {
  const { title, amount, category, description, date } = req.body;

  const income = incomeModel({
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
    await income.save()
    res.status(200).json({message: 'Your new method of income has been added.'})
  } catch (error) {
    return res.status(500).json({message: 'Internal Server Error'})
  }
  console.log(income)
}

export async function getIncome(req, res) {
  try{
    const foundIncome = await incomeModel.find().sort({createdAt: -1})
    return res.status(200).json(foundIncome)
  } catch (error) {
    return res.status(500).json({message: 'Server Error'})
  }
}

export async function deleteIncome(req, res) {
  const { id } = req.params;
  try {
    await incomeModel.findByIdAndDelete(id)
    res.status(200).json({message: 'Income deleted'})   
  } catch (error) {
    return res.status(500).json({message: 'Server Error'})
  }
}