import React from 'react';
import {Form } from '../components';
import {purchaseToken} from '../services';

export function BuyingPage() {
    const purchase = async () => {
       console.log(await purchaseToken());
    }
    return (
        <React.Fragment>
             <section className={'container mt-10'}>
                 <h4 className="text-center mb-12 uppercase text-lg">Buying Electricity</h4>
                    <div className='w-4/12 mx-auto'>
                         <Form page={1} handleSubmit={purchase}/>
                    </div>
                </section>
        </React.Fragment>
    )
}