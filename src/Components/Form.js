import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

//form validation
const schema = yup.object().shape({
    name: yup.string().required().min(2, "name must be at least 2 characters"),
    size: yup.string().required(),
    sauce: yup.string().required(),
    pepperoni: yup.string().notRequired(),
    sausage: yup.string().notRequired(),
    bacon: yup.string().notRequired(),
    chicken: yup.string().notRequired(),
    mushrooms: yup.string().notRequired(),
    peppers: yup.string().notRequired(),
    onions: yup.string().notRequired(),
    pineapples: yup.string().notRequired(),
    olives: yup.string().notRequired(),
    crust: yup.string().notRequired(),
    instructions: yup.string().notRequired()
});

//set state for the form
const Form = () => {

    const [ form, setForm ]= useState({
        name: "",
        size: "",
        sauce: false,
        pepperoni: false,
        sausage: false,
        bacon: false,
        chicken: false,
        mushrooms: false,
        peppers: false,
        onions: false,
        pineapples: false,
        olives: false,
        crust: "",
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

    //directs to confirmation page
    const history = useHistory();

    const routeToConfirmation= () => {
        history.push("/Confirmation")
    }

    
    const onChange = e => {
        const { checked, value, name, type } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value

        setForm({...form, [name]: valueToUse});        
        setFormErrors(name, valueToUse);
    }

    //to create newOrder once submit button has been pressed
    const onSubmit = e => {
        e.preventDefault();
        const newOrder = {
            name: form.name,
            size: form.size,
            sauce: form.sauce,
            pepperoni: form.pepperoni,
            sausage: form.sausage,
            bacon: form.bacon,
            chicken: form.chicken,
            mushrooms: form.mushrooms,
            peppers: form.peppers,
            onions: form.onions,
            pineapples: form.pineapples,
            olives: form.olives,
            crust: form.crust,
            instructions: form.instructions
        }

        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (        
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="order-name">
                <label><h3>Enter your Name:</h3>
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
                <label><h3>Select a size:</h3>
                    <select value={form.size} name="size" id="size-dropdown" onChange={onChange}>
                        <option size="">--Select a Size--</option>
                        <option size="Small">Small</option>
                        <option size="medium">Medium</option>
                        <option size="large">Large</option>
                    </select>
                </label>
            </div>

            <div className="form-group-radio">
                <h3>Choose your Sauce:</h3>
                <label>Marinara:
                    <input
                        type="radio"
                        name="sauce"
                        value="marinara"
                        checked={form.sauce === "marinara"} 
                        onChange={onChange}                        
                    />
                </label>

                <label> Garlic Parmesan:
                    <input
                        type="radio"
                        name="sauce"
                        value="garlic parmesan"
                        checked={form.sauce === "garlic parmesan"} 
                        onChange={onChange}                        
                    />
                </label>

                <label>Barbeque:
                    <input
                        type="radio"
                        name="sauce"
                        value="barbeque"
                        checked={form.sauce === "barbeque"} 
                        onChange={onChange}                        
                    />
                </label>

                <label>Buffalo:
                    <input
                        type="radio"
                        name="sauce"
                        value="buffalo"
                        checked={form.sauce === "buffalo"}
                        onChange={onChange}                        
                    />
                </label>
            </div>

            <div className="form-group-checkbox">
                <h3>Select you Toppings:</h3>
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
                <label><h3>Select type of Crust:</h3>
                    <select value={form.crust} name="crust" onChange={onChange}>
                        <option crust="">--Select a Crust--</option>
                        <option crust="pan">Pan</option>
                        <option crust="hand-tossed">Hand-Tossed</option>
                        <option crust="thin">Thin</option>
                    </select>
                </label>
            </div>

            <div className="form-group-text-box">
                <label><h3>Special Instructions:</h3>
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
                <button id="order-button">Add to Order</button>
            </div>
        </form>
    )
}

export default Form;