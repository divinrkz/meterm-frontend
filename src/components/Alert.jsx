import React from 'react';

export const Alert = ({success=false, message, handleClose}) => {
    
    return (
            <React.Fragment>
                   <div className={((success) ? 'bg-teal-700 ': 'bg-rose-500 ')  + ' flex justify-between w-6/12 mx-auto mb-8 relative text-white py-3 px-5 rounded-lg'}>
                       <p>{message}</p>

                       <span className="mt-1 cursor-pointer" onClick={handleClose}>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="12" height="12" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="48.98 46.86 27.11 24.99 48.96 3.13 46.84 1.01 24.99 22.86 3.12 1 1 3.12 22.86 24.99 1 46.85 3.12 48.98 24.99 27.11 46.86 48.98 48.98 46.86" fill="#fff"></polygon></svg>
                      
                       </span>
                    </div>
            </React.Fragment>
    )
}