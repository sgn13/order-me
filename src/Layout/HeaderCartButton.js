import React, { useContext } from 'react'
import CartIcon from '../components/Cart/CartIcon';
import { CartContext } from '../store/CartContext'
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {
    const cartObject = useContext(CartContext);
    const cartItems = cartObject.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Cart
            </span>
            <span className={classes.badge}>
                {cartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton
