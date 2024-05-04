import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';
import { AppProvider } from './context/AppContext';
import { CurrencyContext } from './context/CurrencyContext';

const App = () => {
    const [currency, setCurrency] = useState('£'); 

    return (
        <AppProvider>
            <CurrencyContext.Provider value={{ currency, setCurrency }}> {/* pass the currency and setCurrency to the provider */}
                <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        } 

                        {
                            /* currency dropdown */
                            <div className='col-sm'>
                                <CurrencyDropdown />
                            </div>
                        }       
                       
                        {
                            /* Add ExpenseList component here */
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
            </CurrencyContext.Provider>
        </AppProvider>
    );
};

export default App;