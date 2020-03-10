import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`

const ProjectLinkContainer = styled.div`
width: 50%;
/* border: 1px solid yellow; */
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 20px;
margin-left: auto;
    margin-right: auto;
  @media (min-width: 1000px) {
    width: 40%;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }
`

const DeployedLink = styled.a`
  width: 50%;
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
@media (min-width: 1000px) {
  width: 42%;
}
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const GitHubLink = styled.a`
  width: 50%;
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
@media (min-width: 1000px) {
  width: 42%;
}
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const Title = styled.h1`
  /* border: 2px solid red; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.div`
  font-size: 36px;
`

const ProjectDescription = styled.p`
  /* text-align: center; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid black; */
  font-size: 20px;
`

const AccompanyingImage = styled.img`
  width: 55%;
  /* border: 3px solid darkblue; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 20px;
`

const TriviaGame = () => (
  <Layout>
    <Container>
      <Title>National Parks</Title>
      <ProjectLinkContainer>
        <DeployedLink
          href="https://us-national-parks.netlify.com/"
          target="_blank"
        >
          NATIONAL PARKS
        </DeployedLink>
        <GitHubLink
          href="https://github.com/mdrisco4/National-Parks"
          target="_blank"
        >
          GITHUB REPO
        </GitHubLink>
      </ProjectLinkContainer>
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        stuff
      </ProjectDescription>
      {/* <AccompanyingImage src="https://i.imgur.com/6DMtsb0.png" /> */}
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        stuff
      </ProjectDescription>
      {/* <AccompanyingImage src="https://i.imgur.com/xguDr3e.png" /> */}
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        stuff
      </ProjectDescription>
      {/* <AccompanyingImage src="https://i.imgur.com/QYGeEWL.png" /> */}
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
        stuff
      </ProjectDescription>
    </Container>
  </Layout>
)

export default TriviaGame
