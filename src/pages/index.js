import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

// import { library } from "@fortawesome/fontawesome-svg-core"
// import { fas } from "@fortawesome/free-solid-svg-icons"
// import { far } from "@fortawesome/free-regular-svg-icons"
// import { fab } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IntroContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 3px solid green; */
  @media (min-width: 1000px) {
    flex-direction: row;
    height: 400px;
    margin-bottom: 180px;
  }
`

const PersonalPhoto = styled.img`
  width: 70%;
  height: auto;
  border: 1px solid black;
  /* border-radius: 6px; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  /* padding-left: 15%; */
  @media (min-width: 1000px) {
    width: auto;
    height: 100%;
    /* margin: auto; */
  }
`

const PersonalInfoContainer = styled.div`
  width: 70%;
  height: auto;
  /* border: 5px solid yellow; */
  /* border-radius: 16px; */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  /* @media (min-width: 1300px) {
    width: 40%;
  } */
  @media (min-width: 1000px) {
    text-align: left;
    height: 100%;
    width: 36%;
    margin: auto;
    padding: 1%;
  }
`

const Name = styled.h1`
  font-size: 42px;
  margin-bottom: 24px;
  text-align: center;
  /* border: 5px solid yellow; */
`

const MissionStatement = styled.div`
  font-size: 28px;
  text-align: center;
  margin-bottom: 8px;
  /* border: 5px solid yellow; */
`

const BrandStatement = styled.div`
  font-size: 24px;
  text-align: center;
  /* border: 5px solid yellow; */
`

const AboutLink = styled.a`
  font-size: 25px;
  color: white;
  /* text-shadow: 2px 2px 5px red; */
  display: flex;
  width: 180px;
  height: auto;
  padding: 3px;
  margin-top: 20px;
  justify-content: center;
  /* border-radius: 6px; */
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  background-color: rgb(99, 95, 85);
  border: 2px solid darkblue;
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 2px solid black;
  }
`

const ProjectSectionTitle = styled.div`
  /* border: 1px solid yellow; */
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 36px;
`

// const ProjectStill = styled.img`
//   border: 4px solid rgb(99, 95, 85);
//   /* border-radius: 25px; */
//   height: auto;
//   display: block;
//   width: 100%;
//   margin-left: auto;
//   margin-right: auto;
//   /* margin-bottom: 20px; */
//   &:hover {
//     border: 4px solid black;
//   }
// `

// const ProjectWrapper = styled.div`
//   width: 100%;
//   height: auto;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 40px;
//   border: 1px solid red;
// `
const ImageWrapper = styled.div`
  position: relative;
  width: 55%;
  height: auto;
  /* border: 1px solid green; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  /* border: 1px solid red; */
  &:hover {
    cursor: pointer;
  }
`
const ProjectStill = styled.img`
  /* border: 4px solid rgb(99, 95, 85); */
  width: 100%;
  height: auto;
  display: inline-block;
  /* width: auto; */
  margin-left: auto;
  margin-right: auto;
`
const ProjectDescription = styled.div`
  text-align: center;
  position: absolute;
  bottom: 2px;
  right: 0;
  background: black;
  color: white;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-transition: visibility 0s, opacity 0.5s linear;
  transition: visibility 0s, opacity 0.5s linear;
  &:hover {
    width: 100%;
    visibility: visible;
    opacity: 0.7;
  }
`

const ProjectTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;
`

const ProjectLink = styled.a`
  text-decoration: none;
  font-size: 25px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 40px;
  width: 20%;
  height: auto;
  padding: 6px;
  border: 4px solid darkblue;
  background-color: rgb(99, 95, 85);
  color: white;
  cursor: pointer;
  @media (min-width: 620px) {
    /* text-shadow: 4px 2px orange, */
    /* padding-top: auto;
    padding-bottom: auto; */
  }
  &:hover {
    border: 4px solid black;
    background-color: darkblue;
    color: rgb(110, 176, 249);
  }
`

const ContactPrompt = styled.div`
  width: 55%;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`

const IndexPage = () => (
  <Layout>
    <IntroContainer>
      <PersonalPhoto src="https://i.imgur.com/dOmiyM6.jpg"></PersonalPhoto>
      <PersonalInfoContainer>
        <Name>Michael Driscoll</Name>
        <MissionStatement>
          Engineering innovative solutions in a fast paced industry
        </MissionStatement>
        <BrandStatement>
          As a growing software engineer with client experience and proficiency
          in web design, coding and full stack development, I bring to the table
          a skillset crucial for finding success in the workplace. I am excited
          to grow in the tech industry using my talents in software engineering
          while continually seeking to keep up with the latest in cutting edge
          technology.
        </BrandStatement>
        <AboutLink href="/about">More About Me</AboutLink>
      </PersonalInfoContainer>
    </IntroContainer>
    <ProjectSectionTitle>Projects</ProjectSectionTitle>
    <ProjectTitle>Modern Troussaeu</ProjectTitle>

    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/DOJXKHR.png"></ProjectStill>
      <ProjectDescription>
        This is a client project in which I was a member of the front end
        development team
      </ProjectDescription>
    </ImageWrapper>

    <ProjectLink href="/modern-trousseau">Learn More</ProjectLink>

    <ProjectTitle>National Parks Website</ProjectTitle>

    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/NjtX1by.png"></ProjectStill>
      <ProjectDescription>
        This is an interactive site that I built with API fetches that provides
        users links to pages with detailed descriptions of dozens of National
        Parks around the country
      </ProjectDescription>
    </ImageWrapper>

    <ProjectLink href="/national-parks">Learn More</ProjectLink>
    <ProjectTitle>MERN Full Stack App</ProjectTitle>

    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/nKATmCL.png"></ProjectStill>

      <ProjectDescription>
        This is a full stack application that I built with an API I deployed and
        a React frontend
      </ProjectDescription>
    </ImageWrapper>

    <ProjectLink href="/mern-full-stack">Learn More</ProjectLink>
    <ProjectTitle>Trivia Game</ProjectTitle>

    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/wEPvcXY.png"></ProjectStill>

      <ProjectDescription>
        This is an interactive game that I built using basic HTML, CSS and
        Javascript that allows the users to enjoy a fun trivia game with a
        variety of topics
      </ProjectDescription>
    </ImageWrapper>

    <ProjectLink href="/trivia-game">Learn More</ProjectLink>
    <hr
      style={{
        border: "1px solid black",
      }}
    ></hr>
    <ContactPrompt>
      If you would like to work with me or to learn more about these or any
      other projects I am working on please feel free to contact me via email or
      LinkedIn
    </ContactPrompt>
  </Layout>
)

export default IndexPage
