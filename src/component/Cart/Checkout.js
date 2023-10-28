import React, {useRef, useState} from 'react';
import classes from "./Styles/Checkout.module.css"

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });
    const nameInput = useRef();
    const streetInput = useRef();
    const cityInput = useRef();
    const postalCode = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredCity = cityInput.current.value;
        const enteredPostalCode = postalCode.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);


        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });


        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid;

        if (!formIsValid) {
            return;
        }


        // TODO: submit the cart data
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode
        })
    }
    const nameControlClasses = `${classes.control} ${formInputValidity.name ? "" : classes.invalid} `;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? "" : classes.invalid} `;
    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? "" : classes.invalid} `;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? "" : classes.invalid} `;


    return <form onSubmit={submitHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input ref={nameInput} type='text' id='name'/>
            {!formInputValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input ref={streetInput} type='text' id='street'/>
            {!formInputValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
            <label htmlFor='postalCode'>Postal Code</label>
            <input ref={postalCode} type='text' id='postalCode'/>
            {!formInputValidity.postalCode && <p>Please enter a valid postal code (5 characters long)!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input ref={cityInput} type='text' id='city'/>
            {!formInputValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <button onClick={props.onCancel} type='button'>Cancel</button>
        <button className={classes.submit}>Confirm</button>
    </form>
}

export default Checkout