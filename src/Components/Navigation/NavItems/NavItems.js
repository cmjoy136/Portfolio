import React from 'react'
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.css'

const navItems = () => {
    return(
        <ul className={classes.NavItems}>
            <NavItem>Home</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Feed</NavItem>
            <NavItem>Contact</NavItem>
        </ul>
    )
}

export default navItems