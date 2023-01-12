import React from "react";

export default function Home() {

    const routeToOrder= () => {

    }

    return(
        <div className="home-wrapper">
            <img src="/Pizza.jpg"></img>
            <button
                onClick={routeToOrder}
                className="order-button"
            >
                Pizza?
            </button>
        </div>
    )
}
