import React from 'react'
import classes from './Header.module.css'
import wallpaper from '../assets/food-wallpaper.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Order Me</h1>
                <HeaderCartButton onClick={props.showCartHandler} />
            </header>
            <div className={classes['main-image']}>
                <div className={classes.hero}>
                    <h1 className="hero-title">Order Delicious Food</h1>
                    <input type="text" placeholder="Search ..." />
                </div>
                <img src={wallpaper} alt="" />
            </div>
        </>
    )
}

export default Header
