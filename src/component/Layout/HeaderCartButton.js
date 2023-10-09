import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Styles/HeaderCartButton.module.css"
import CardContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CardContext)
    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)
    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton