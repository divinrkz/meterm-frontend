import React from 'react';
import {Form } from '../components';


export function CheckingPage() {
    return (
        <React.Fragment>
            <section className={'container mt-10'}>
                <h4 className="text-center mb-12 uppercase text-lg">Checking Balance</h4>
                <div className='w-4/12 mx-auto'>
                        <Form page={2}/>
                </div>
            </section>
    </React.Fragment>
    )
}