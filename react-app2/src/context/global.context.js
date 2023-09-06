/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react"
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axiosInstance.post(`add-income`, income)
        try {
          return response
        } catch (error) {
          setError(error.response.data.message)
        }
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axiosInstance.get(`get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res = await axiosInstance.delete(`delete-income/${id}`)
        try{
          return res
        } finally {
          getIncomes()
        }
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate expenses
    const addExpense = async (income) => {
        const response = await axiosInstance.post(`add-expense`, income)
        try {
          return response
        } catch (err) {
          setError(err.response.data.message)
        }
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axiosInstance.get(`get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res = await axiosInstance.delete(`delete-expense/${id}`)
        try {
          return res
        } finally {
          getExpenses()
        } 
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(GlobalContext)
}

export { useGlobalContext }