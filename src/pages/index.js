import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

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
  border: 1px solid yellow;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    height: 400px;
    margin-bottom: 180px;
  }
`

const PersonalPhoto = styled.img`
  width: 70%;
  height: auto;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  border: 1px solid red;
  @media (min-width: 900px) {
    margin-left: 10%;
    margin-right: 2.5%;
    margin-top: 2.5%;
    width: auto;
    height: 85%;
  }
`

const PersonalInfoContainer = styled.div`
  width: 70%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 1px solid green;
  @media (min-width: 900px) {
    text-align: left;
    height: 100%;
    width: 40%;
    margin: auto;
    margin-right: 5%;
    /* padding: 1%; */
  }
`

const Name = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 42px;
    margin-bottom: 8px;
  }
`

const MissionStatement = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
  @media (min-width: 900px) {
    font-size: 24px;
  }
`

const BrandStatement = styled.div`
  font-size: 16px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 20px;
  }
`

const AboutLink = styled.a`
  font-size: 25px;
  color: white;
  display: flex;
  width: 180px;
  height: auto;
  padding: 3px;
  margin-top: 20px;
  justify-content: center;
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
  text-align: center;
  font-size: 54px;
  font-weight: 700;
  margin: 40px 0 36px 0;
  border: 1px solid purple;
`

const DesktopDescriptionPrompt = styled.div`
  display: none;
  @media (min-width: 750px) {
    border: 1px solid brown;
    display: flex;
    width: 60%;
    font-size: 25px;
    text-align: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 55%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }
`

const ProjectStill = styled.img`
  width: 100%;
  height: auto;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`

const ProjectDescription = styled.div`
  display: none;
  @media (min-width: 750px) {
    display: block;
    text-align: center;
    font-size: 24px;
    position: absolute;
    bottom: 2px;
    right: 0;
    background: black;
    color: white;
    opacity: 0;
    width: 100%;
    height: 100%;
    /* margin: auto; */
    /* z-index: 1; */
    -webkit-transition: visibility 0s, opacity 0.5s linear;
    transition: visibility 0s, opacity 0.5s linear;
    &:hover {
      width: 100%;
      visibility: visible;
      opacity: 0.7;
    }
  }
`

const MobileProjectDescription = styled.div`
  display: flex;
  width: 75%;
  font-size: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: 1px solid red;
  justify-content: center;
  @media (min-width: 750px) {
    display: none;
  }
`

const ProjectTitle = styled.div`
  padding-left: 7.5%;
  padding-right: 7.5%;
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
        <Name>Hi, I'm Michael!</Name>
        {/* <MissionStatement>
          Engineering innovative solutions in a fast paced industry
        </MissionStatement> */}
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
    <DesktopDescriptionPrompt>
      Hover over the image for project description
    </DesktopDescriptionPrompt>
    <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/DOJXKHR.png"></ProjectStill>
      <ProjectDescription>
        A client project currently still in development. Built using React,
        Contentful and GraphQL. I am assigned to the front end on a 15 person
        team utilizing Storybook for branch management.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A client project currently still in development. Built using React,
      Contentful and GraphQL. I am assigned to the front end on a 15 person team
      utilizing Storybook for branch management.
    </MobileProjectDescription>
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
    <MobileProjectDescription>
      This is an interactive site that I built with API fetches that provides
      users links to pages with detailed descriptions of dozens of National
      Parks around the country
    </MobileProjectDescription>
    <ProjectLink href="/national-parks">Learn More</ProjectLink>
    <ProjectTitle>Rochester Beer Community</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/nKATmCL.png"></ProjectStill>
      <ProjectDescription>
        A full stack site built with Django that provides menus, draft lists and
        brewery information for users. This site also allows for brewery owners
        and managers to access full CRUD capabilties to make alterations to
        their menus and brewery information in real time.
      </ProjectDescription>
    </ImageWrapper>
    <ProjectLink href="/mern-full-stack">Learn More</ProjectLink>
    <MobileProjectDescription>
      A full stack site built with Django that provides menus, draft lists and
      brewery information for users. This site also allows for brewery owners
      and managers to access full CRUD capabilties to make alterations to their
      menus and brewery information in real time.
    </MobileProjectDescription>
    <ProjectTitle>Trivia Game</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/AF5FHEm.png"></ProjectStill>
      <ProjectDescription>
        One of my first projects: a fun trivia game with 3 selectable categories
        related to media. Written with HTML, CSS and Vanilla Javascript.
        Somewhat limited by the fact that I wrote the questions myself instead
        of fetching from an API, but pretty fun. Give it a try!  Link on project page.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      One of my first projects: a fun trivia game with 3 selectable categories
      related to media. Written with HTML, CSS and Vanilla Javascript. Somewhat
      limited by the fact that I wrote the questions myself instead of fetching
      from an API, but pretty fun. Give it a try!  Link on project page.
    </MobileProjectDescription>
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
