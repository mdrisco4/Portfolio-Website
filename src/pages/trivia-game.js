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

const DeployedLink = styled.a``

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
      <ProjectDescription>
        I wrote this game using HTML, CSS and Vanilla JS. Rather than baing
        populated with data fetched from a trivia API I opted to write the
        questions myself with the idea being that I could write sets of trivia
        questions across different categories to be seeded into a database for
        users to choose.
      </ProjectDescription>
    </Container>
  </Layout>
)

export default TriviaGame
