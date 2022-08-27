import React, { useState } from 'react';
import { Expense } from '../../types/Expense';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

type propsExpenses = {
    items: Expense[];
};

const Expenses: React.FC<propsExpenses> = (props) => {
    const [filteredYear, setFilteredYear] = useState(
        new Date().getFullYear().toString()
    );

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
