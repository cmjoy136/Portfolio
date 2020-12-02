import React from 'react'
import classes from './ProjectCard.module.css'

const projectCard = (props) => {
    return(
        <li className={classes.ProjectCard}>
            <div>Project Image</div>
            <div>Project desc</div>
            <div> project created</div>
        </li>
    )
}

export default projectCard