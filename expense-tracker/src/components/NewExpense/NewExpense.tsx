import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { Expense } from '../../types/Expense';

type propsNewExpense = {
    onAddExpense: (expense: Expense) => void;
};

const NewExpense: React.FC<propsNewExpense> = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopIsEditingHandler = () => {
        setIsEditing(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
        props.onAddExpense(enteredExpenseData);
    };

    return (
        <div className="new-expense">
            {!isEditing ? (
                <button onClick={startEditingHandler}>Add New Expense</button>
            ) : (
                <ExpenseForm
                    onCancel={stopIsEditingHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
