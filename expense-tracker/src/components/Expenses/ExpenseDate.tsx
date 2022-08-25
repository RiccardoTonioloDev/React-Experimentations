import React from 'react';
import './ExpenseDate.css';

type propsExpenseDate = {
    date: Date;
};

const nome: React.FC<propsExpenseDate> = (props) => {
    const month: string = props.date.toLocaleString('en-US', { month: 'long' });
    const day: string = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year: number = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    );
};
export default nome;
