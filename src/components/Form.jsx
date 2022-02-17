
import React from 'react';

export const Form = ({page=1, handleSubmit}) => {
    return (
            <React.Fragment>
                  <form>
                        {page == 1 ? 
                        <React.Fragment>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meter Number</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 000000" required=""/>
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount in Frw</label>
                                <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="ex: 100" required=""/>
                            </div>
                            <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm">Purchase</button>
                        </React.Fragment>
                    : 
                        page == 2 ? 
                            <React.Fragment>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meter Number</label>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 000000" required=""/>
                                </div>
                                <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm">Purchase</button>
                            </React.Fragment>
                    :        
                            <React.Fragment>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Token Validation</label>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 000000" required=""/>
                                </div>
                                <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm">Purchase</button>
                            </React.Fragment>

                    }
                            
                        </form>

            </React.Fragment>
    )
}

