import React, { useState } from 'react';

const CurrencyDropdown = () => {
    const [currency, setCurrency] = useState('$ Dollar');

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <select id='currencySelect' value={currency} onChange={handleCurrencyChange}>
                <option value="$ Dollar">$ Dollar</option>
                <option value="£ Pound">£ Pound</option>
                <option value="€ Euro">€ Euro</option>
                <option value="₹ Rupee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;