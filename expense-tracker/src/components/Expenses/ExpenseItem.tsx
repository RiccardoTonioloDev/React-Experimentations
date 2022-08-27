import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

type propsExpenseItem = {
    title: string;
    amount: number;
    date: Date;
};

const ExpenseItem: React.FC<propsExpenseItem> = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
