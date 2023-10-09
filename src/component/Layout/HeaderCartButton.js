import CartIcon from "../Cart/CartIcon";
import classes from "./Styles/HeaderCartButton.module.css"


const HeaderCartButton = (props) => {
    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>$5.22</span>
    </button>
}

export default HeaderCartButton