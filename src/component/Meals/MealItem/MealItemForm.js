import {useRef, useState} from "react";
import classes from "./../Styles/MealItemForm.css"
import Input from "../../UI/Input";


const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountAsNumber = +enteredAmount
        if (enteredAmount.trim().length === 0 || enteredAmountAsNumber < 1 || enteredAmountAsNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountAsNumber)
    }
    return (<form className={classes.form}>
        <Input label="Amount" input={{
            ref: amountInputRef,
            id: 'amount_' + props.id,
            type: 'number',
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,

        }}/>
        <button onClick={submitHandler} className={classes['button']}>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount. (1-5)</p>}
    </form>);
};


export default MealItemForm