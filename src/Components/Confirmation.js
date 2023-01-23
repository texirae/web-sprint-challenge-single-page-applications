import React from "react";
import pizza from './Pizza.jpg';

const Confirmation = () => {

    return(
        <div className="confirmation-wrapper">
            <h1>Congratulations! Your order has been recieved</h1>
            <img src={pizza} alt="pizza" />
        </div>
    )
}


export default Confirmation;