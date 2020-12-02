import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import classes from './Projects.module.css'

const projects = (props) => {
    return(
        <div className={classes.Projects}>
            <h1>My projects</h1>
            <ul>
                <ProjectCard/>
                <ProjectCard/>
            </ul>

        </div>
    )
}

export default projects