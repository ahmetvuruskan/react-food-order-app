import classes from "./Styles/Cart.module.css"
import Modal from "../UI/Modal";


const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}> {[
        {
            id: 'c1',
            name: "Sushi",
            amount: 2,
            price: 12.99
        }
    ].map((item) => <li key={item.id}>{item.name}</li>)}</ul>

    return <Modal onClose={props.onCloseClick} >
        {cartItems}
        <div className={classes.total}><span>Total Amount</span><span>35.62</span></div>
        <div className={classes.actions}>
            <button onClick={props.onCloseClick} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>

}

export default Cart