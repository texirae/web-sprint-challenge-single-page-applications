import React from "react";
import { useHistory } from "react-router-dom";
import pizza from './Pizza.jpg';

export default function Home() {

    const history = useHistory();

    const routeToOrder= () => {
        history.push("/Form")
    }

    return(
        <div className="home-wrapper">
            <img src={pizza} alt="pizza" />
            <button className="order-button"
                onClick={routeToOrder}
            >
                Pizza?
            </button>
        </div>
    )
}
