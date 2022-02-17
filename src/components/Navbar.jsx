import React, {useState, useEffect} from 'react';
import {BuyingPage, CheckingPage} from '../pages'

export const Navbar = () => {
    const [state, setState] = useState({page: 1});

   const handleChange = page => {
        setState({ page });
    }
    
    
    return (
            <React.Fragment>
                <nav className="relative w-full flex flex-wrap items-center justify-between py-5 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                      
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                        <a className="text-xl text-white pr-2 font-semibold" href="#">METERM</a>
                        {/* Left links */}
                      
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="flex items-center relative">
                        <a href="" className={'px-9 active'} onClick={() => handleChange(1)}>Buy Electricity</a>
                        <a href="" className={''} onClick={() => handleChange(2)}>Checking Package</a>
                    </div>
                    {/* Right elements */}
                    </div>
                </nav>
                    
                {state.page == 1 ? 
                        <BuyingPage/> : state.page == 2 ? 
                        <CheckingPage/> : null
                }
               
            </React.Fragment>
    )
}