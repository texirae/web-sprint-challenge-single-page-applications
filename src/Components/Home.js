import React from "react";
import { useHistory } from "react-router-dom";
import pizza from './Pizza.jpg';

const Home = () => {

    const history = useHistory();

    const routeToOrder= () => {
        history.push("/pizza")
    }

    return(
        <div className="home-wrapper">
            <img src={pizza} alt="pizza" />
            <button className="orders-button"
                onClick={routeToOrder}
            >
                Pizza?
            </button>
        </div>
    )
}

export default Home;
