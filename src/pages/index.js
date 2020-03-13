import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import "../styles/fonts.css"

const ProjectLinkContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 20px;
margin-left: auto;
    margin-right: auto;
  @media (min-width: 850px) {
    width: 40%;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }
`

const DeployedLink = styled.a`
font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  background-color: rgb(99, 95, 85);
  border: 4px solid darkblue;
  height: auto;
  padding: 4px 0;
  color: white;
  text-decoration: none;
  margin-bottom: 24px;
  text-align: center;
@media (min-width: 850px) {
  width: 42%;
}
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const GitHubLink = styled.a`
font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  background-color: rgb(99, 95, 85);
  border: 4px solid darkblue;
  height: auto;
  padding: 4px 0;
  color: white;
  text-decoration: none;
  margin-bottom: 24px;
  text-align: center;
@media (min-width: 850px) {
  width: 42%;
}
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`






const IntroContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    height: 400px;
    margin-bottom: 120px;
  }
`

const PersonalPhoto = styled.img`
  width: 70%;
  height: auto;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
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
  @media (min-width: 900px) {
    text-align: left;
    height: 100%;
    width: 40%;
    margin: auto;
    margin-right: 5%;
  }
`

const Name = styled.h1`
  font-family: "Montserrat Alternates";
  font-size: 28px;
  margin-bottom: 24px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 42px;
    margin-bottom: 8px;
  }
`

// const MissionStatement = styled.div`
//   font-size: 20px;
//   text-align: center;
//   margin-bottom: 8px;
//   @media (min-width: 900px) {
//     font-size: 24px;
//   }
// `

const BrandStatement = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 16px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 20px;
  }
`

const AboutLink = styled.a`
  font-family: "Montserrat Alternates";
  font-size: 25px;
  color: white;
  display: flex;
  width: 220px;
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
  font-family: "Montserrat Alternates";
  text-align: center;
  font-size: 54px;
  font-weight: 700;
  margin: 20px 0 36px 0;
`

// const DesktopDescriptionPrompt = styled.div`
//   font-family: "Montserrat Alternates";
//   display: none;
//   @media (min-width: 750px) {
//     display: flex;
//     width: 60%;
//     font-size: 25px;
//     text-align: center;
//     justify-content: center;
//     margin-left: auto;
//     margin-right: auto;
//     margin-bottom: 24px;
//   }
// `

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
  font-family: "Montserrat Alternates";
  display: none;
  @media (min-width: 750px) {
    display: block;
    text-align: center;
    font-size: 21px;
    position: absolute;
    bottom: 2px;
    right: 0;
    background: black;
    color: white;
    opacity: 0;
    width: 100%;
    height: 100%;
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
  font-family: "Montserrat Alternates";
  display: flex;
  width: 75%;
  font-size: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  justify-content: center;
  @media (min-width: 750px) {
    display: none;
  }
`

const ProjectTitle = styled.div`
  font-family: "Montserrat Alternates";
  padding-left: 7.5%;
  padding-right: 7.5%;
  text-align: center;
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;
`

const ProjectLink = styled.a`
  font-family: "Montserrat Alternates";
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
  font-family: "Montserrat Alternates";
  width: 55%;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`

const GetInTouch = styled.a`
  font-family: "Montserrat Alternates";
  font-size: 40px;
  color: white;
  background-color: rgb(99, 95, 85);
  display: flex;
  width: 320px;
  height: auto;
  padding: 3px;
  margin-top: 20px;
  justify-content: center;
  border: 4px solid darkblue;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  text-decoration: none;
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
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
    <ProjectTitle>Trivia Game</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/AF5FHEm.png"></ProjectStill>
      <ProjectDescription>
        One of my first projects: a fun trivia game with 3 selectable categories
        related to media. Written with HTML, CSS and Vanilla Javascript.
        Somewhat limited by the fact that I wrote the questions myself instead
        of fetching from an API, but pretty fun. Give it a try! Link on project
        page.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      One of my first projects: a fun trivia game with 3 selectable categories
      related to media. Written with HTML, CSS and Vanilla Javascript. Somewhat
      limited by the fact that I wrote the questions myself instead of fetching
      from an API, but pretty fun. Give it a try! Link on project page.
    </MobileProjectDescription>
    <ProjectLink href="/trivia-game">Learn More</ProjectLink>
    <ProjectTitle>National Parks Website</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/NjtX1by.png"></ProjectStill>
      <ProjectDescription>
        This is an interactive site that I built with API fetches that provides
        users links to pages with detailed descriptions of National Parks around
        the country. Built using React with an API fetch from the National Park Service and an AdobeXD mockup.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      This is an interactive site that I built with API fetches that provides
      users links to pages with detailed descriptions of dozens of National
      Parks around the country. Built using React with an API fetch from the National Park Service and an AdobeXD mockup.
    </MobileProjectDescription>
    <ProjectLink href="/national-parks">Learn More</ProjectLink>
    <ProjectTitle>Rochester Beer Community</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/PpcIkEw.png"></ProjectStill>
      <ProjectDescription>
        A full stack site built with Django that provides menus, draft lists and
        brewery information for users. This site also allows for brewery owners
        and managers to access full CRUD capabilties to make alterations to
        their menus and brewery information in real time. This project is
        currently in development.
      </ProjectDescription>
    </ImageWrapper>
    <ProjectLink href="/rochester-breweries">Learn More</ProjectLink>
    <MobileProjectDescription>
      A full stack site built with Django that provides menus, draft lists and
      brewery information for users. This site also allows for brewery owners
      and managers to access full CRUD capabilties to make alterations to their
      menus and brewery information in real time.
    </MobileProjectDescription>
    <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/DOJXKHR.png"></ProjectStill>
      <ProjectDescription>
        A client project currently still in development. Built using React,
        Contentful and GraphQL. I am assigned to the front end on a 15 person
        team employing Storybook for branch management.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A client project currently still in development. Built using React,
      Contentful and GraphQL. I am assigned to the front end on a 15 person team
      utilizing Storybook for branch management.
    </MobileProjectDescription>
    <ProjectLink href="/modern-trousseau">Learn More</ProjectLink>
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
    <GetInTouch href="/contact">Contact Me</GetInTouch>
  </Layout>
)

export default IndexPage
