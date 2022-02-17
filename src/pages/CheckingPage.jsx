import React, {useState, useEffect} from 'react';
import {Alert, Form } from '../components';
import {checkToken} from '../services';

export function CheckingPage() {
    const [response, setResponse] = useState(null);
    const [alert, setAlert] = useState(false);
    const [results, setResults] = useState(null);
    const check = async () => {
        console.log('check')
        setResults(null);
        try {
            console.log(form);
            let res = await checkToken(form.token);
            if (!res.success) {
                console.log(res);
                setAlert(true);
                res.message = `${res?.message}: ${res?.error}`;
                setResponse(res);
                // setTimeout(() => {
                //     setAlert(false);
                // }, 4000)
            } else {
                console.log(res);
                setResults(res.data);
                setResponse(res);
                // setTimeout(() => {
                //     setAlert(false);
                // }, 7000)
            }
        } catch(e) {
            console.log(e);
        }
    }
    const [form, setForm] = useState({
        token: ''
    });


    const getDaysDifference = (results) => {
        const sDate = new Date(results.createdAt);
        const eDate = new Date(results.expiryDate);

        const startDate =  `${sDate.getFullYear()}-${sDate.getUTCMonth()}-${sDate.getDate()}`;
        const endDate =  `${sDate.getFullYear()}-${sDate.getUTCMonth()}-${sDate.getDate()}`;

        const diffInMs   = new Date(results.expiryDate) - new Date(results.createdAt)
        const diff =  Math.round(diffInMs / (1000 * 60 * 60 * 24));
        if (diff < 1)  
            return 'You have 0 days, buy now!'
        else if (diff == 1) 
            return `${diff} day remaining.`   
        else     
            return `${diff} days remaining.`    
        
    }

    const closeAlert = () => {
        setAlert(false);
        setResponse(null);
    }

    useEffect(() => {
        // setAlert(true);
    }, [])

    return (
        <React.Fragment>
            <section className={'container mt-10'}>
             {alert ? <Alert success={response?.success} handleClose={closeAlert} message={`${response?.message}`}/> : null}
                
                <h4 className="text-center mb-12 uppercase text-lg">Checking Balance</h4>
                <div className='w-4/12 mx-auto'>
                      
                        <Form page={2} handleSubmit={check} formState={form} setFormState={setForm}/>

                </div>
            </section>

            {results ? 
            <section className="mt-12 w-2/12 mx-auto">
                <div>
                    <p className='text-green-400'><span className="font-bold">{getDaysDifference(results)}</span> </p>
                    <p>Meter Number: <span className="font-bold">{results.meterNumber}</span></p>
                    <p>Token:  <span className="font-bold">{results.token}</span></p>
                    <p>Amount:  <span className="font-bold">{results.amount.toLocaleString()} Frw</span></p>
                    
                    <p>Status:  <span className="font-bold">{results.status}</span></p>
                </div>
            </section> : null}
    </React.Fragment>
    )
}