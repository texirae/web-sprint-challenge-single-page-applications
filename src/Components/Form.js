import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required().min(2, "name must be at least 2 characters"),
});

const Form = () => {

    const [ form, setForm ]= useState({
        name: "",
        size: "",
        sauce: "",
        pepperoni: false,
        sausage: false,
        bacon: false,
        chicken: false,
        mushrooms: false,
        peppers: false,
        onions: false,
        pineapples: false,
        olives: false,
        instructions: ""
    });

    const [ errors, setErrors ]= useState({
        name: "",
    });

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]:""}))
        .catch(err => setErrors({...errors, [name]:err.errors[0]}))
    }

    const history = useHistory();

    const routeToConfirmation= () => {
        history.push("/Confirmation")
    }


    const onChange = e => {
        const { checked, value, name, type } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value
        setForm(value);
        setFormErrors(name, valueToUse);
        //update(form);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        //submit();
    }



    return (        
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="order-name">
                <label>Name:
                    <input
                            name="name"
                            id="name-input"
                            type="text"
                            placeholder="Type your name here"
                            maxLength="100"
                            value={form.name}
                            onChange={onChange} 
                        />
                </label>
                { errors.name.length > 2 && <p className="error">{errors.name}</p> }
            </div>
            <div className="form-group-selection">
                <label>Size:
                    <select value={form.size} name="size" id="size-dropdown" onChange={onChange}>
                        <option size="">--Select a Size--</option>
                        <option size="Small">Small</option>
                        <option size="medium">Medium</option>
                        <option size="large">Large</option>
                    </select>
                </label>
            </div>

            <div className="form-group-radio">
                <label>Sauce:</label>
                <label>Marinara:
                    <input
                        type="radio"
                        name="sauce"
                        value="marinara"
                        onChange={onChange}
                        checked={form.sauce === "marinara"} 
                    />
                </label>

                <label> Garlic Parmesan:
                    <input
                        type="radio"
                        name="sauce"
                        value="garlic parmesan"
                        onChange={onChange}
                        checked={form.sauce === "garlic parmesan"} 
                    />
                </label>

                <label>Barbeque:
                    <input
                        type="radio"
                        name="sauce"
                        value="barbeque"
                        onChange={onChange}
                        checked={form.sauce === "barbeque"} 
                    />
                </label>

                <label>Buffalo:
                    <input
                        type="radio"
                        name="sauce"
                        value="buffalo"
                        onChange={onChange}
                        checked={form.sauce === "buffalo"}
                    />
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
                        <option crust="">--Select a Crust--</option>
                        <option crust="pan">Pan</option>
                        <option crust="hand-tossed">Hand-Tossed</option>
                        <option crust="thin">Thin</option>
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