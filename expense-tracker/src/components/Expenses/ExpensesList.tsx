import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import { Expense } from '../../types/Expense';

type propsExpensesList = {
    filteredExpenses: Expense[];
};

const ExpensesList: React.FC<propsExpensesList> = (props) => {
    // const renderItems: Function = (items: Expense[]): JSX.Element[] => {
    //     return items.map((expense) => {
    //         return (
    //             <ExpenseItem
    //                 title={expense.title}
    //                 amount={expense.amount}
    //                 date={expense.date}
    //                 key={expense.id}
    //             />
    //         );
    //     });
    // };

    //Logic to know what to print
    if (props.filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map((expense) => {
                return (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                );
            })}
        </ul>
    );
};

export default ExpensesList;
