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

const RocBreweries = () => (
  <Layout>
    <Container>
      <Title>Rochester Craft Beer Community</Title>
      <ProjectLinkContainer>
      <DeployedLink
        href="http://54.161.227.204:8000/breweries/"
        target="_blank"
        >
        ROC BREWERIES
      </DeployedLink>
      <GitHubLink
      href="https://github.com/mdrisco4/breweries_django_be"
      target="_blank"
      >
        GITHUB REPO
      </GitHubLink>
      </ProjectLinkContainer>
      <h3>Description</h3>
      <ProjectDescription>
        The idea behind this project was to develop a full stack application
        with admin logins and passwords to be used for different CRUD
        functionality. I wanted a site where owners and managers could add their
        breweries and change menu and draft list items while users could use the
        site to find the best spot for their night life needs in craft beer and
        have restricted access to admin permissions to delete or force any
        changes needed. This was developed with Python and Django.
      </ProjectDescription>
      <h3>Approach</h3>
      <h3>Problems</h3>
      <h3>Solutions</h3>
    </Container>
  </Layout>
)

export default RocBreweries
