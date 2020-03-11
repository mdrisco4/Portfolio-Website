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
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        The idea behind this project was to develop a full stack application
        with admin logins and passwords to be used for different CRUD
        functionality. I wanted a site where owners and managers could add their
        breweries and change menu and draft list items while users could use the
        site to find the best spot for their night life needs in craft beer and
        have restricted access to admin permissions to delete or force any
        changes needed. This was developed with Python and Django.
      </ProjectDescription>
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        I developed this project using Python with a Django backend and Django
        templates to build out my front end. This was a project in which I
        wanted to employ a new technology that I had not used before.
        Additionally the scale of the project did not require a complex stack
        build, so using templates made sense, both for simplicity and to learn
        how to write a Django app more thoroughly. The bulk of the work required
        was in constructing my data models and creating a backend with full
        stack capabilities. The use of Django templates would make building the
        front end a fairly quick and straightforward process.
      </ProjectDescription>
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        The most difficult and involved part of building this app was setting up
        admin permissions and permissions for verified users (i.e. brewery
        owners, managers, etc.) the ability to access full CRUD capabilities so
        as to not allow anyone to go to the deployed site and poke around with
        the content.
      </ProjectDescription>
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription></ProjectDescription>
    </Container>
  </Layout>
)

export default RocBreweries
