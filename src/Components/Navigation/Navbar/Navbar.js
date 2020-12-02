import React from 'react'
import NavItems from '../NavItems/NavItems'
import classes from './Navbar.module.css'
import selfie from '../../../Assets/images/pfp.jpg'

const navbar = (props) => {
    return(
        <header className={classes.Navbar}>
            <img src={selfie} alt='Chris Joy'></img>
            <h1>Chris Joy</h1>
            <h4>cmjoy136@gmail.com</h4>
            <nav>
                <NavItems/>
            </nav>
        </header>
    )
}

export default navbar