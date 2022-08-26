import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { Expense } from '../../types/Expense';

type propsNewExpense = {
    onAddExpense: (expense: Expense) => void;
};

const NewExpense: React.FC<propsNewExpense> = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
        console.log(enteredExpenseData);
        props.onAddExpense(enteredExpenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
