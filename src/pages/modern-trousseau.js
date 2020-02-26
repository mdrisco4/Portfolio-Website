import React from "react"
import { Link } from "gatsby"

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
border: 1px solid yellow;
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
  border-radius: 8px;
  height: auto;
  padding: 4px 0;
  color: "black";
  text-shadow: 2px 2px 5px red;
  text-decoration: none;
  margin-bottom: 24px;
@media (min-width: 1000px) {
  width: 42%;
}
  &:hover {
    border: 4px solid black;
    background-color: rgb(90, 176, 255);
  }
`

const GitHubLink = styled.a`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  background-color: rgb(99, 95, 85);
  border: 4px solid darkblue;
  border-radius: 8px;
  height: auto;
  padding: 4px 0;
  color: "black";
  text-shadow: 2px 2px 5px red;
  text-decoration: none;
  margin-bottom: 24px;
@media (min-width: 1000px) {
  width: 42%;
}
  &:hover {
    border: 4px solid black;
    background-color: rgb(90, 176, 255);
  }
`

const Title = styled.h1`
  border: 2px solid red;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const ProjectDescription = styled.p`
  /* text-align: center; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`

const ModernTrousseau = () => (
  <Layout>
    <Container>
      <Title>Modern Trousseau</Title>
      <ProjectLinkContainer>
      <DeployedLink href="" target="_blank">
        MODERN TROUSSEAU
      </DeployedLink>
      <GitHubLink
        href="https://github.com/jserrao/modern-trousseau-gatsby"
        target="_blank"
        >
        GITHUB REPO
      </GitHubLink>
        </ProjectLinkContainer>
      <h3>Description</h3>
      <ProjectDescription>
        Modern Trousseau is a client project that I worked on with a team of
        fifteen using Storybook for branch management. I was assigned to the
        front end team where we started the first sprint by building components
        to Figma specifications while the back end team worked on setting up a
        database with Contentful and GraphQL. Once all components were complete
        the front end team moved forward with using the compnentes to build out
        full pages for our second sprint. The final stages of the project
        involved connecting the pages to each other and populating the site with
        data from the database deployed by the backend team.
      </ProjectDescription>
      <h3>Approach</h3>
      <h3>Problems</h3>
      <h3>Solutions</h3>
    </Container>
  </Layout>
)

export default ModernTrousseau
