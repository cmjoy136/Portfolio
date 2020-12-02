import React from 'react'
import landscape from '../../Assets/images/mountainlandscape.png'
import classes from './Mountains.module.css'

const mountain = () => {
    return(
        <div className={classes.Mountains}>
        <img src={landscape} alt='mountains'></img>
        </div>
        )
}

export default mountain