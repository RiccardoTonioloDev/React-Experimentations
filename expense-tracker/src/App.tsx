import React from 'react';
import ExpenseItem from './components/ExpenseItem';

const App: React.FC = () => {
    return (
        <div className="App">
            <h2>Hello</h2>
            <p>This is also visible!</p>
            < ExpenseItem />
        </div>
    );
}

export default App;
