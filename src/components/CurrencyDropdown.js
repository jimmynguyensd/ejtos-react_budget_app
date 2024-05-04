import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const CurrencyDropdown = () => {
    const { currency, setCurrency } = useContext(CurrencyContext);

    const changeCurrency = (event) => {
        setCurrency(event.target.value);
    }

    return (
        <select className="btn btn-success" id="inputGroupSelect03" value={currency} onChange={changeCurrency}>
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
        </select>
    );
};

export default CurrencyDropdown;