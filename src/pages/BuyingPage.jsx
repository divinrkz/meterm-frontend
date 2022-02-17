import React, {useState, useEffect} from 'react';
import {Alert, Form } from '../components';
import {purchaseToken} from '../services';

export function BuyingPage() {
    const [response, setResponse] = useState(null);
    const [alert, setAlert] = useState(false);
    const purchase = async () => {
        try {
            let res = await purchaseToken(form);
            if (!res.success) {
                setAlert(true);
                res.message = `${response?.message}: ${response?.error}`;
                setResponse(res);
                setTimeout(() => {
                    setAlert(false);
                }, 4000)
            } else {
                console.log(res);
                res.message = `Your Token is: ${res.data.token}`;
                setAlert(true);
                setResponse(res);
                setTimeout(() => {
                    setAlert(false);
                }, 7000)
            }
        } catch(e) {
            console.log(e);
        }
    }
    const [form, setForm] = useState({
        meterNumber: '',
        amount: ''
    });


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
                 <h4 className="text-center mb-12 uppercase text-lg">Buying Electricity</h4>
                    <div className='w-4/12 mx-auto'>
                         <Form page={1} handleSubmit={purchase} formState={form} setFormState={setForm}/>
                    </div>
                </section>
        </React.Fragment>
    )
}