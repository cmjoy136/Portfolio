import React from 'react'
import classes from './ProjectCard.module.css'

const projectCard = (props) => {
    return(
        <li className={classes.ProjectCard}>
            <a href={props.link}><img src={props.pic} alt={props.alt}/></a>
            <div  className={classes.InnerDiv}>
                <h3>{props.title}</h3>
                <p>{props.children}</p>
                <p>{props.created}</p>
            </div>
        </li>
    )
}



export default projectCard