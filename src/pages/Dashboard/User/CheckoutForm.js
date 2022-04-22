import React from 'react';


const CheckoutForm = ({order}) => {
    return (
        <div>
            <h3>Checkout {order.price}</h3>
        </div>
    );
};

export default CheckoutForm;