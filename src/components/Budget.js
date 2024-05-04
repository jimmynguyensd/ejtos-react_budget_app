import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { CurrencyContext } from '../context/CurrencyContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { currency } = useContext(CurrencyContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} max="20000" min="{totalExpenses}" onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;