import React from "react";

export default function Home() {

    const routeToOrder= () => {

    }

    return(
        <div className="home-wrapper">
            <img className="pizza-img" src="/pizza.jpg"></img>
            <button
                onClick={routeToOrder}
                className="order-button"
            >
                Order Now!
            </button>
        </div>
    )
}
