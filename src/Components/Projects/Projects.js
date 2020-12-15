import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import burger from '../../Assets/images/burger-logo.png'
import classes from './Projects.module.css'

const projects = (props) => {
    return(
        <div id='projects' className={classes.Projects}>
            <h1>My projects</h1>
            <ul>
                <ProjectCard 
                    title='Burger Builder'
                    pic={burger}>
                        React burger ordering app that includes building a burger, checking out, and making faux requests to a firebase database
                    </ProjectCard>
                <ProjectCard/>
            </ul>

        </div>
    )
}

export default projects