import React, {Fragment, useContext, useState} from "react";
import classes from "./Styles/Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {
    const cartCtx = useContext(CartContext)
    const [isOrdered, setIsOrdered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`


    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItems = <ul className={classes['cart-items']}> {cartCtx.items.map((item) =>
        <CartItem key={item.id} amount={item.amount} name={item.name} price={item.price}
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                  onAdd={cartItemAddHandler.bind(null, item)}/>)}</ul>
    const hasItems = cartCtx.items.length > 0


    const orderHandler = () => {
        setIsOrdered(true)
    }
    const submitHandler = async (userData) => {
        setIsSubmitting(true)
        await fetch('https://react-http-example-9c3e4-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clear()

    }

    const modalActions = <div className={classes.actions}>
        <button onClick={props.onCloseClick} className={classes['button--alt']}>Close</button>
        {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
    </div>;

    const cartModalContent = <React.Fragment>
        {cartItems}
        <div className={classes.total}><span>Total Amount</span><span>{totalAmount}</span></div>
        {isOrdered && <Checkout onConfirm={submitHandler} onCancel={props.onCloseClick}/>}
        {!isOrdered && modalActions}
    </React.Fragment>

    const isSubmittingModalContent = <p>Sending order data...</p>
    const didSubmitModalContent =
        <Fragment><p>Successfully sent the order</p>
            <button onClick={props.onCloseClick} className={classes.button}>Close</button>
        </Fragment>
    return <Modal onClose={props.onCloseClick}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {didSubmit && didSubmitModalContent}
    </Modal>

}

export default Cart