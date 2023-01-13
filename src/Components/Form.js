import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {

    const [ form, setForm ]= useState({
        name: "",
        size: "",
        pepperoni: false,
        green_peppers: false,
        pineapple: false,
        ham: false,
        sausage: false,
        special: "",
    });

    const history = useHistory();

    const routeToConfirmation= () => {
        history.push("/Confirmation")
    }


    const onChange = evt => {
        const {form} = evt.target;
        //update(form);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        //submit();
    }


    return (        
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="form-group-selection">
                <label>Size:
                    <select value={form.size} name="size-dropdown" onChange={onChange}>
                        <option value="">--Select a Size--</option>
                        <option value="Small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
            </div>

            <div className="form-group-radio">
                <label>Please Choose a Sauce:</label>
                <label>Marinara:
                    <input
                        type="radio"
                        name="sauce"
                        value="marinara"
                        onChange={onChange}
                        checked={e.target.type === "radio" ? e.target.checked : e.target.value} />
                </label>

                <label>Creamy Garlic Parmesan:
                    <input
                        type="radio"
                        name="sauce"
                        value="parmesan"
                        onChange={onChange}
                        checked={form.sauce === "parmesan"} />
                </label>

                <label>Barbeque:
                    <input
                        type="radio"
                        name="sauce"
                        value="barbeque"
                        onChange={onChange}
                        checked={form.sauce === "barbeque"} />
                </label>

                <label>Buffalo:
                    <input
                        type="radio"
                        name="sauce"
                        value="buffalo"
                        onChange={onChange}
                        checked={form.sauce === "buffalo"} />
                </label>
            </div>

            <div className="form-group-checkbox">
                <label>Please Choose your Toppings:</label>
                <label>Pepperoni:
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={form.pepperoni}
                        onChange={onChange} />
                </label>

                <label>Sausage:
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={form.sausage}
                        onChange={onChange} />
                </label>

                <label>Bacon:
                    <input
                        type="checkbox"
                        name="bacon"
                        checked={form.bacon}
                        onChange={onChange} />
                </label>

                <label>Chicken:
                    <input
                        type="checkbox"
                        name="chicken"
                        checked={form.chicken}
                        onChange={onChange} />
                </label>

                <label>Mushrooms:
                    <input
                        type="checkbox"
                        name="mushrooms"
                        checked={form.mushrooms}
                        onChange={onChange} />
                </label>

                <label>Peppers:
                    <input
                        type="checkbox"
                        name="peppers"
                        checked={form.peppers}
                        onChange={onChange} />
                </label>

                <label>Onions:
                    <input
                        type="checkbox"
                        name="onions"
                        checked={form.onions}
                        onChange={onChange} />
                </label>

                <label>Pineapples:
                    <input
                        type="checkbox"
                        name="pineapples"
                        checked={form.pineapples}
                        onChange={onChange} />
                </label>

                <label>Olives:
                    <input
                        type="checkbox"
                        name="olives"
                        checked={form.olives}
                        onChange={onChange} />
                </label>
            </div>

            <div className="form-group-selection">
                <label>Crust:
                    <select value={form.crust} name="crust" onChange={onChange}>
                        <option value="">--Select a Crust--</option>
                        <option value="pan">Pan</option>
                        <option value="hand-tossed">Hand-Tossed</option>
                        <option value="thin">Thin</option>
                    </select>
                </label>
            </div>

            <div className="form-group-text-box">
                <label>Special Instructions:
                    <input
                        name="instructions"
                        id="special-text"
                        type="text"
                        placeholder="Type special instructions here"
                        maxLength="100"
                        value={form.instructions}
                        onChange={onChange} />
                </label>
            </div>

            <div className="submit">
                <button id="order-button" onClick={routeToConfirmation}>Add to Order</button>
            </div>
        </form>
    )
}

export default Form;