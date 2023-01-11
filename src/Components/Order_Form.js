import React, { useState } from "react";

const OrderForm = (props) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <h1>Build Your Own Pizza!</h1>

            <form onSubmit={submit}>
                <label>Pizza Size:
                    <DropdownButton id="size-dropdown" title="Select Your Size">
                        <Dropdown.Item>Small</Dropdown.Item>
                        <Dropdown.Item>Medium</Dropdown.Item>
                        <Dropdown.Item>Large</Dropdown.Item>
                    </DropdownButton>
                </label>
                
                <label>Sauce:
                    <Form.Check
                        type="checkbox"
                        id="marinara-sauce"
                        label="Marinara Sauce"
                    />
                    <Form.Check
                        type="checkbox"
                        id="parmesan-sauce"
                        label="Creamy Garlic Parmesan"
                    />
                    <Form.Check
                        type="checkbox"
                        id="barbecue-sauce"
                        label="Barbeque"
                    />
                    <Form.Check
                        type="checkbox"
                        id="buffalo-sauce"
                        label="Buffalo"
                    />
                </label>
                
                <label>Toppings:
                    <Form.Check
                        type="checkbox"
                        id="pepperoni"
                        label="Pepperoni"
                    />
                    <Form.Check
                        type="checkbox"
                        id="sausage"
                        label="Sausage"
                    />
                    <Form.Check
                        type="checkbox"
                        id="bacon"
                        label="Canadian Bacon"
                    />
                    <Form.Check
                        type="checkbox"
                        id="chicken"
                        label="Chicken"
                    />
                    <Form.Check
                        type="checkbox"
                        id="mushrooms"
                        label="Mushrooms"
                    />
                    <Form.Check
                        type="checkbox"
                        id="onions"
                        label="Onions"
                    />
                    <Form.Check
                        type="checkbox"
                        id="peppers"
                        label="Peppers"
                    />
                    <Form.Check
                        type="checkbox"
                        id="pineapple"
                        label="Pineapples"
                    />
                    <Form.Check
                        type="checkbox"
                        id="olives"
                        label="olives"
                    />
                </label>
                
                <label>Crust:
                    <Form.Check
                        type="checkbox"
                        id="pan-crust"
                        label="Pan"
                    />
                    <Form.Check
                        type="checkbox"
                        id="hand-tossed-crust"
                        label="Hand-Tossed"
                    />
                    <Form.Check
                        type="checkbox"
                        id="thin-crust"
                        label="Thin"
                    />
                    <Form.Check
                        type="checkbox"
                        id="gluten-free-crust"
                        label="Gluten-Free"
                    />
                </label>

                <label>Special Instructions:
                    <InputGroup>
                        <InputGroup.Text>Special Instructions</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="Special Instructions" />
                    </InputGroup>
                </label>
            </form>
        </div>
    )
}