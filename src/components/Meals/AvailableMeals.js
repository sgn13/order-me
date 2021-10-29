import classes from './AvailableMeals.module.css'
import React from 'react'
import Card from '../../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
    const MOCK_MEALS = [
        {
            id: '1',
            name: 'Chowmine',
            description: 'Finest and cheapest food',
            price: 70,
        },
        {
            id: '2',
            name: 'Choupsey',
            description: 'Delicious item',
            price: 200,
        },
        {
            id: '3',
            name: 'Burger',
            description: 'Most ordered food',
            price: 80,
        },
        {
            id: '4',
            name: 'Sausage',
            description: 'Tasty item',
            price: 20,
        },
        {
            id: '5',
            name: 'Pizza',
            description: 'Favroite item',
            price: 200,
        },
    ]

    const mealsList = MOCK_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
