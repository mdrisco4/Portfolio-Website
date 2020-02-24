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

const DeployedLink = styled.a`
background-color: yellowgreen;
  border: 4px solid rgb(99, 95, 85);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  height: auto;
  padding: 4px 0;
`

const GitHubLink = styled.a`
background-color: yellowgreen;
  border: 4px solid rgb(99, 95, 85);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  height: auto;
  padding: 4px 0;
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

const TriviaGame = () => (
  <Layout>
    <Container>
      <Title>Trivia Game</Title>
      <DeployedLink
        href="https://mdrisco4.github.io/Unit-Project-1/"
        target="_blank"
      >
        TRIVIA
      </DeployedLink>
      <GitHubLink
      href="https://github.com/mdrisco4/Unit-Project-1"
      target="_blank"
    >
        GITHUB REPO
      </GitHubLink>
      <h3>Description</h3>
      <ProjectDescription>
        I wrote this game using HTML, CSS and Vanilla JS. Rather than baing
        populated with data fetched from a trivia API I opted to write the
        questions myself with the idea being that I could write sets of trivia
        questions across different categories to be seeded into a database for
        users to choose.
      </ProjectDescription>
      <h3>Approach</h3>
      <h3>Problems</h3>
      <h3>Solutions</h3>
    </Container>
  </Layout>
)

export default TriviaGame
