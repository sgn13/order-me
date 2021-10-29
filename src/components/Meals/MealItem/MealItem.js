import classes from './MealItem.module.css'
import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import { CartContext } from '../../../store/CartContext'

const MealItem = (props) => {
    const cartObject = useContext(CartContext)
    const price = `$ ${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartObject.addItem({
            id: props.id,
            name: props.name,
            amount,
            price: props.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>

        </li>
    )
}

export default MealItem
