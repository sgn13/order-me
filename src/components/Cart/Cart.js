import classes from './Cart.module.css'
import React, { useContext } from 'react'
import Modal from '../../UI/Modal'
import { CartContext } from '../../store/CartContext'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartObject = useContext(CartContext)
    const hasItems = cartObject.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartObject.removeItem(id)
    };
    const cartItemAddHandler = item => {
        cartObject.addItem(item)
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartObject.items.map(item => <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />)}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$ ${cartObject.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                {hasItems && <button className={classes['button--order']}>Order</button>}
                <button className={classes['button--close']} onClick={props.onClose}>Close</button>
            </div>
        </Modal>
    )
}

export default Cart
