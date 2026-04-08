import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  const githubUsername = "ahmetsuat67";
  const githubUrl = `https://github.com/${githubUsername}`;

  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          About Full-Stack Developer <span>{githubUsername}</span>
        </h1>
      </HeaderContainer>

      <InfoContainer>
        <h2>Hi, I&apos;m {githubUsername}</h2>
        <h3>I’m currently learning Full-Stack Development.</h3>
        <h4>I’ve already learned: JavaScript, React, Django, SQL, and Python.</h4>

        <h2>
          GitHub:{" "}
          <a href={githubUrl} target="_blank" rel="noreferrer">
            {githubUrl}
          </a>
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;