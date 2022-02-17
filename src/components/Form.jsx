
import React, {useState, useEffect} from 'react';

export const Form = ({page=1, handleSubmit, formState, setFormState}) => {

    useEffect(() => {
        console.log(formState);
    }, [])

   const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setFormState({...formState, [name]: e.target.value});
    }
    

    return (
            <React.Fragment>
                  <form>
                        {page == 1 ? 
                        <React.Fragment>
                            <div className="mb-6">
                                <label htmlFor="meter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meter Number</label>
                                <input type="text" name="meterNumber" value={formState.meterNumber} onChange={handleChange} id="meter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 000000" required=""/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount in Frw</label>
                                <input type="text" name="amount" value={formState.amount} onChange={handleChange} id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="ex: 100" required=""/>
                            </div>
                            <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm">Purchase</button>
                        </React.Fragment>
                    : 
                        page == 2 ? 
                            <React.Fragment>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meter Number</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 000000" required=""/>
                                </div>
                                <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm">Purchase</button>
                            </React.Fragment>
                    :        
                            <React.Fragment>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Token Validation</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 000000" required=""/>
                                </div>
                                <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm">Purchase</button>
                            </React.Fragment>

                    }
                            
                        </form>

            </React.Fragment>
    )
}

