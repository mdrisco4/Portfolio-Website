import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import "../styles/fonts.css"

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
    margin-bottom: 0;
    max-width: 1520px;
    margin-left: auto;
    margin-right: auto;
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
    margin-top: 2%;
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
  @media (min-width: 1050px) {
    font-size: 42px;
    margin-bottom: 8px;
  }
`

const BrandStatement = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 16px;
  text-align: center;
  @media (min-width: 1050px) {
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

const FreelanceLink = styled.a`
  font-family: "Montserrat Alternates";
  text-decoration: none;
  font-size: 25px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 40px;
  width: 30%;
  height: auto;
  padding: 6px;
  border: 4px solid darkblue;
  background-color: rgb(99, 95, 85);
  color: white;
  cursor: pointer;
  @media (min-width: 675px) {
    width: 20%;
  }
  &:hover {
    border: 4px solid black;
    background-color: darkblue;
    color: rgb(110, 176, 249);
  }
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
        <BrandStatement>
          As a software engineer with client experience and proficiency in web
          design, coding and full stack development, I bring to the table a
          skill set crucial for finding success in the workplace. I am excited
          to grow in the tech industry using my talents in software engineering
          while continually seeking to keep up with the latest in cutting edge
          technology. See some of my projects below.
        </BrandStatement>
        <AboutLink href="/about">More About Me</AboutLink>
      </PersonalInfoContainer>
    </IntroContainer>
    <ProjectSectionTitle>Projects</ProjectSectionTitle>

    <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <FreelanceLink href="/freelance">Freelance</FreelanceLink>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/DOJXKHR.png"></ProjectStill>
      <ProjectDescription>
        An open source client project built with React, Contentful and GraphQL
        on an Agile team. I provided code for the front end working on a team
        utilizing Storybook for component tracking and git branch management
        during development.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      An open source client project built with React, Contentful and GraphQL on
      an Agile team. I provided code for the front end working on a team
      utilizing Storybook for component tracking and git branch management
      during development.
    </MobileProjectDescription>
    <ProjectLink href="/modern-trousseau">Learn More</ProjectLink>

    <ProjectTitle>Photography Site</ProjectTitle>
    <FreelanceLink href="/freelance">Freelance</FreelanceLink>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/s2xoqpd.png"></ProjectStill>
      <ProjectDescription>
        A freelance project I made for an aspiring professional photographer. I
        built this project with a Gatsby frontend and employed the Contentful
        content management system. With Contentful I authorized the client to
        add, delete or make changes to photos displayed in their portfolio. With
        a dynamic data fetch this allows the client to continue to update with a
        user friendly drag and drop interface
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A freelance project I made for an aspiring professional photographer. I
      built this project with a Gatsby frontend and employed the Contentful
      content management system. With Contentful I authorized the client to add,
      delete or make changes to photos displayed in their portfolio. With a
      dynamic data fetch this allows the client to continue to update with a
      user friendly drag and drop interface
    </MobileProjectDescription>
    <ProjectLink href="/fragnoli-photos">Learn More</ProjectLink>

    {/* <ProjectTitle>Rochester Beer Community</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/HosJpMx.png"></ProjectStill>
      <ProjectDescription>
        A full stack site built with Django that provides menus, draft lists and
        brewery information for users. This site also allows for brewery owners
        and managers to access full CRUD capabilties to make changes to their
        menus and brewery information in real time.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A full stack site built with Django that provides menus, draft lists and
      brewery information for users. This site also allows for brewery owners
      and managers to access full CRUD capabilties to make changes to their
      menus and brewery information in real time.
    </MobileProjectDescription>
    <ProjectLink href="/rochester-breweries">Learn More</ProjectLink> */}

    <ProjectTitle>National Parks Website</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/NjtX1by.png"></ProjectStill>
      <ProjectDescription>
        This is an interactive site that I built fetching data from the National
        Park Sevice API that provides users links to pages with details for
        national parks around the country. Built using React to specifications
        provided in an AdobeXD mockup.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      This is an interactive site that I built fetching data from the National
      Park Sevice API that provides users links to pages with details for
      national parks around the country. Built using React to specifications
      provided in an AdobeXD mockup.
    </MobileProjectDescription>
    <ProjectLink href="/national-parks">Learn More</ProjectLink>

    <ProjectTitle>Trivia Game</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/AF5FHEm.png"></ProjectStill>
      <ProjectDescription>
        One of my first projects: a fun trivia game with 3 selectable categories
        related to media. Written with HTML, CSS and Vanilla Javascript. Give it
        a try! Link on project page.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      One of my first projects: a fun trivia game with 3 selectable categories
      related to media. Written with HTML, CSS and Vanilla Javascript. Give it a
      try! Link on project page.
    </MobileProjectDescription>
    <ProjectLink href="/trivia-game">Learn More</ProjectLink>

    <ProjectTitle>Tic Tac Toe</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/AF5FHEm.png"></ProjectStill>
      <ProjectDescription>
        TIC TAC TOE
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      DESCRIPTION
    </MobileProjectDescription>
    <ProjectLink href="/trivia-game">Learn More</ProjectLink>

    {/* <ProjectTitle>Rochester Beer Community</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/HosJpMx.png"></ProjectStill>
      <ProjectDescription>
        A full stack site built with Django that provides menus, draft lists and
        brewery information for users. This site also allows for brewery owners
        and managers to access full CRUD capabilties to make changes to their
        menus and brewery information in real time.
      </ProjectDescription>
    </ImageWrapper>
    <ProjectLink href="/rochester-breweries">Learn More</ProjectLink>
    <MobileProjectDescription>
      A full stack site built with Django that provides menus, draft lists and
      brewery information for users. This site also allows for brewery owners
      and managers to access full CRUD capabilties to make changes to their
      menus and brewery information in real time.
    </MobileProjectDescription> */}

    {/* <ProjectTitle>Photography Site</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/s2xoqpd.png"></ProjectStill>
      <ProjectDescription>
        A freelance project I made for an aspiring professional photographer. I
        built this project with a Gatsby frontend and employed the Contentful
        content management system. With Contentful I authorized the client to
        add, delete or make changes to photos displayed in their portfolio. With
        a dynamic data fetch this allows the client to continue to update
        without needing me for frequent maintenence.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A freelance project I made for an aspiring professional photographer. I
      built this project with a Gatsby frontend and employed the Contentful
      content management system. With Contentful I authorized the client to add,
      delete or make changes to photos displayed in their portfolio. With a
      dynamic data fetch this allows the client to continue to update without
      needing me for frequent maintenence.
    </MobileProjectDescription>
    <ProjectLink href="/fragnoli-photos">Learn More</ProjectLink> */}

    {/* <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/DOJXKHR.png"></ProjectStill>
      <ProjectDescription>
        An open source client project built with React, Contentful and GraphQL
        on an Agile team. I provided code for the front end working on a team
        utilizing Storybook for branch management.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      An open source client project built with React, Contentful and GraphQL on
      an Agile team. I provided code for the front end working on a team
      utilizing Storybook for branch management.
    </MobileProjectDescription>
    <ProjectLink href="/modern-trousseau">Learn More</ProjectLink> */}
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
