import React from "react";
import classes from './AboutMe.module.css'

const aboutMe = () => {
  return (
    <div className={classes.AboutMe}>
      <h1>About Me</h1>
      <br />
      <p>
        Hello! My name is Chris Joy and I am a {" "}
        <a href="https://www.kenzie.academy/" target="_blank" rel="noreferrer">
          Kenzie Academy
        </a>{" "}
        Software Engineering graduate with a penchant for front end
        development. I'm always looking to improve myself and my skills,
        whether that be for career advancement or fun.
      </p>
      <br />
      <p>
        During times when I'm not working on projects, I enjoy working out,
        playing guitar, and taking pictures of my cat.
      </p>
    </div>
  );
};

export default aboutMe