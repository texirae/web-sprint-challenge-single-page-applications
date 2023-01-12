import React from "react";

export default function OrderForm(props) {

    const { values, update, submit } = props;

    const onChange = evt => {
        const {value} = evt.target;
        update(value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <><h2>Build Your Own Pizza!</h2>
        
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="form-group-selection">
                <label>Size:
                    <select value={values.size} name="size-dropdown" onChange={onChange}>
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
                        checked={values.sauce === "marinara"} />
                </label>

                <label>Creamy Garlic Parmesan:
                    <input
                        type="radio"
                        name="sauce"
                        value="parmesan"
                        onChange={onChange}
                        checked={values.sauce === "parmesan"} />
                </label>

                <label>Barbeque:
                    <input
                        type="radio"
                        name="sauce"
                        value="barbeque"
                        onChange={onChange}
                        checked={values.sauce === "barbeque"} />
                </label>

                <label>Buffalo:
                    <input
                        type="radio"
                        name="sauce"
                        value="buffalo"
                        onChange={onChange}
                        checked={values.sauce === "buffalo"} />
                </label>
            </div>

            <div className="form-group-checkbox">
                <label>Please Choose your Toppings:</label>
                <label>Pepperoni:
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange} />
                </label>

                <label>Sausage:
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange} />
                </label>

                <label>Bacon:
                    <input
                        type="checkbox"
                        name="bacon"
                        checked={values.bacon}
                        onChange={onChange} />
                </label>

                <label>Chicken:
                    <input
                        type="checkbox"
                        name="chicken"
                        checked={values.chicken}
                        onChange={onChange} />
                </label>

                <label>Mushrooms:
                    <input
                        type="checkbox"
                        name="mushrooms"
                        checked={values.mushrooms}
                        onChange={onChange} />
                </label>

                <label>Peppers:
                    <input
                        type="checkbox"
                        name="peppers"
                        checked={values.peppers}
                        onChange={onChange} />
                </label>

                <label>Onions:
                    <input
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange} />
                </label>

                <label>Pineapples:
                    <input
                        type="checkbox"
                        name="pineapples"
                        checked={values.pineapples}
                        onChange={onChange} />
                </label>

                <label>Olives:
                    <input
                        type="checkbox"
                        name="olives"
                        checked={values.olives}
                        onChange={onChange} />
                </label>
            </div>

            <div className="form-group-selection">
                <label>Crust:
                    <select value={values.crust} name="crust" onChange={onChange}>
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
                        value={values.instructions}
                        onChange={onChange} />
                </label>
            </div>

            <div className="submit">
                <button id="order-button">Add to Order</button>
            </div>
        </form></>
    )
}