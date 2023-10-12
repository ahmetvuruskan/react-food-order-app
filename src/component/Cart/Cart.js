import {useContext} from "react";
import classes from "./Styles/Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`


    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item,amount:1})
    }
    const cartItems = <ul className={classes['cart-items']}> {cartCtx.items.map((item) =>
        <CartItem key={item.id} amount={item.amount} name={item.name} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />)}</ul>
    const hasItems = cartCtx.items.length>0




    return <Modal onClose={props.onCloseClick} className={classes.scrollbar} >
        {cartItems}
        <div className={classes.total}><span>Total Amount</span><span>{totalAmount}</span></div>
        <div className={classes.actions}>
            <button onClick={props.onCloseClick} className={classes['button--alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>

}

export default Cart