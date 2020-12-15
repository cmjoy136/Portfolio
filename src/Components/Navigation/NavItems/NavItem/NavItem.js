import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import classes from './NavItem.module.css'

const navItem = (props) => {
    return (
        <li className={classes.NavItem}>
            <Link href={props.link}>
                {props.children}
            </Link>
        </li>
    )
}

export default navItem