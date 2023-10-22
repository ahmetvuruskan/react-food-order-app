import {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Styles/HeaderCartButton.module.css"
import CardContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
    const cartCtx = useContext(CardContext)
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)
    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`

    const {items} = cartCtx;
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true)
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [items])
    return <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton