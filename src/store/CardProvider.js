import React, {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
        const extisingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[extisingCartItemIndex]

        let updatedItems;

        if (existingCartItem) {
          const  updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[extisingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }


    return defaultCartState
}

const CardProvider = props => {

    const [cartState, dispatcCartAction] = useReducer(cartReducer, defaultCartState,)
    const addItemToCartHandler = (item) => {
        dispatcCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    }
    const removeItemFromCartHandler = (id) => {
        dispatcCartAction({
            type: "REMOVE_ITEM",
            item: id

        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CardProvider