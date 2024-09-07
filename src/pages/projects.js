import React from "react"
import "../styles/fonts.css"
// import Layout from "../components/layout"
import styled from "styled-components"

import Layout from "../components/layout"

const PageTitle = styled.div`
    /* color: white; */
    font-family: "Montserrat Alternates";
    color: rgb(137, 146, 173);
    font-size: 55px;
    text-align: center;
`
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

const ProjectSectionTitle = styled.div`
  font-family: "Montserrat Alternates";
  text-align: center;
  font-size: 54px;
  font-weight: 700;
  margin: 50px 0 36px 0;
  color: rgb(114, 200, 179);
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
  color: rgb(77, 84, 107);
`

const Projects = () => (
    <Layout>
    <PageTitle>PROJECTS</PageTitle>
    <ProjectTitle>BrewBuddies</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/q25zOZm.jpg"></ProjectStill>
      <ProjectDescription>
        A freelance project I developed for the founder of a small beverage
        distribution company. I built this site using React and built in a few
        features to help the site look sleek and professional. This project
        remains ongoing to meet demands for client's growing business.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A freelance project I developed for the founder of a small beverage
      distribution company. I built this site using React and built in a few
      features to help the site look sleek and professional. This project
      remains ongoing to meet demands for client's growing business.
    </MobileProjectDescription>
    
    <ProjectLinkContainer>
      <DeployedLink href="https://brewbuddiesny.com/" target="_blank">
        BrewBuddies
      </DeployedLink>
      <GitHubLink
        href="https://github.com/mdrisco4/brew-buddies"
        target="_blank"
      >
        Github Repo
      </GitHubLink>
    </ProjectLinkContainer>

    <PageTitle>New Text Here</PageTitle>
      {/* <Link to="/">Go back to the homepage  KEEP OR DROP??</Link> */}
      </Layout>
)

export default Projects