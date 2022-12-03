import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/enrollment/${id}`

    const {data} = useQuery(['enrollment',id], () => fetch(url).then(res=> res.json()))

    return (
        <div>
            <h2 className='text-info'>Please Pay for: {id}</h2>
        </div>
    );
};

export default Payment;