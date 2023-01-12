import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();

    const routeToOrder= () => {
        history.push("/Form")
    }

    return(
        <div className="home-wrapper">
            <img src="/Pizza.jpg"></img>
            <button className="order-button"
                onClick={routeToOrder}
            >
                Pizza?
            </button>
        </div>
    )
}
