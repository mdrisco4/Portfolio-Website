import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IntroContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid green;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const PersonalPhoto = styled.img`
  width: 70%;
  height: auto;
  border: 5px solid red;
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  @media (min-width: 800px) {
    height: auto;
    width: 45%;
    /* margin: auto; */
  }
`

const PersonalInfoContainer = styled.div`
  width: 70%;
  height: auto;
  border: 5px solid yellow;
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 800px) {
    text-align: left;
    height: 100%;
    width: 45%;
    margin: auto;
    padding: 1%;
  }
`

const ProjectStill = styled.img`
  border: 10px solid rgb(99, 95, 85);
  border-radius: 50px;
  width: 70%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

const ProjectTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
`

const ProjectDescription = styled.div`
  text-align: center;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

const ImageLink = styled.a`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;
  @media (min-width: 620px) {
    /* padding-top: auto;
    padding-bottom: auto; */
  }
`

const LearnMore = styled.a`
  font-size: 25px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 40px;
  width: 20%;
  height: auto;
  padding: 6px;
  border: 4px solid rgb(99, 95, 85);
  background-color: rgb(99, 95, 85);
  border-radius: 15px;
  color: red;
  cursor: pointer;
  @media (min-width: 620px) {
    /* text-shadow: 4px 2px orange, */
    /* padding-top: auto;
    padding-bottom: auto; */
  }
`

const IndexPage = () => (
  <Layout>
    <IntroContainer>
      <PersonalPhoto src="https://i.imgur.com/dOmiyM6.jpg"></PersonalPhoto>
      <PersonalInfoContainer>
        <h1>Michael Driscoll</h1>
        <p>Engineering innovative solutions in a fast paced industry</p>
        <p>
          As a growing software engineer with client experience and proficiency
          in web design, coding and full stack development, I bring to the table
          a variety of skills paramount to success in the workplace. I am
          excited to grow in the tech industry using my talents in software
          engineering while continually seeking to keep up with the latest in
          cutting edge technology.
        </p>
      </PersonalInfoContainer>
    </IntroContainer>
    <ImageLink href="/modern-trousseau">
    <ProjectStill
      src="https://i.imgur.com/DOJXKHR.png"
      className="project-link"
      ></ProjectStill>
      </ImageLink>
    <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <ProjectDescription>
      This is a client project in which I was a member of the front end
      development team
    </ProjectDescription>
    <LearnMore href="/portfolio/">
      <Link to="/modern-trousseau"
      style={{
        color: 'black',
        textShadow: '2px 2px 5px red'
      }}>Learn More</Link>
    </LearnMore>
    <ImageLink href="/national-parks">
    <ProjectStill
      src="https://i.imgur.com/NjtX1by.png"
      className="project-link"
      ></ProjectStill>
      </ImageLink>
    <ProjectTitle>National Parks Website</ProjectTitle>
    <ProjectDescription>
      This is an interactive site that I built with API fetches that provides
      users links to pages with detailed descriptions of dozens of National
      Parks around the country
    </ProjectDescription>
    <LearnMore href="/portfolio/">
      <Link to="/national-parks"
      style={{
        color: 'black',
        textShadow: '2px 2px 5px red'
      }}>Learn More</Link>
    </LearnMore>
    <ImageLink href="/mern-full-stack">
    <ProjectStill
      src="https://i.imgur.com/nKATmCL.png"
      className="project-link"
      ></ProjectStill>
      </ImageLink>
    <ProjectTitle>MERN Full Stack App</ProjectTitle>
    <ProjectDescription>
      This is a full stack application that I built with an API I deployed and a
      React frontend
    </ProjectDescription>
    <LearnMore href="/trivia-game/">
      <Link to="/mern-full-stack"
      style={{
        color: 'black',
        textShadow: '2px 2px 5px red'
      }}>Learn More</Link>
    </LearnMore>
    <ImageLink href="/trivia-game">
    <ProjectStill
      src="https://i.imgur.com/wEPvcXY.png"
      className="project-link"
      >
    </ProjectStill>
      </ImageLink>
    <ProjectTitle>Trivia Game</ProjectTitle>
    <ProjectDescription>
      This is an interactive game that I built using basic HTML, CSS and
      Javascript that allows the users to enjoy a fun trivia game with a variety
      of topics
    </ProjectDescription>
    <LearnMore href="/trivia-game">
      <Link to="/trivia-game"
      style={{
        color: 'black',
        textShadow: '2px 2px 5px red'
      }}>Learn More</Link>
    </LearnMore>
  </Layout>
)

export default IndexPage
