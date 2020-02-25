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
  font-size: 20px;
  background-color: rgb(99, 95, 85);
  border: 4px solid darkblue;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 15%;
  height: auto;
  padding: 4px 0;
  color: "black";
  text-shadow: 2px 2px 5px red;
  text-decoration: none;
  &:hover {
    border: 4px solid black;
    background-color: rgb(90, 176, 255);
  }
`

const GitHubLink = styled.a`
  font-size: 20px;
  background-color: rgb(99, 95, 85);
  border: 4px solid darkblue;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 15%;
  height: auto;
  padding: 4px 0;
  color: "black";
  text-shadow: 2px 2px 5px red;
  text-decoration: none;
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

const SectionTitle = styled.div`
  font-size: 36px;
`

const ProjectDescription = styled.p`
  /* text-align: center; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  font-size: 20px;
`

const AccompanyingImage = styled.img`
width: 55%;
border: 3px solid darkblue;
margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`

const TriviaGame = () => (
  <Layout>
    <Container>
      <Title>Trivia Game</Title>
      <DeployedLink
        href="https://mdrisco4.github.io/Unit-Project-1/"
        target="_blank"
      >
        TRIVIA APP
      </DeployedLink>
      <GitHubLink
        href="https://github.com/mdrisco4/Unit-Project-1"
        target="_blank"
      >
        GITHUB REPO
      </GitHubLink>
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        I wrote this game using HTML, CSS and Vanilla JS. Rather than being
        populated with data fetched from a trivia API I opted to write the
        questions myself with the idea being that I could write sets of trivia
        questions across different categories to be seeded into a database for
        users to choose.
      </ProjectDescription>
      <AccompanyingImage src='https://i.imgur.com/6DMtsb0.png' />
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        The first thing I needed to figure when beginning this project was what
        kind of layout I wanted to have and how I would write the JS to be
        interactive. I opted to write a few short sets of questions for each one
        of three separate topics that the user could choose from.
      </ProjectDescription>
      <AccompanyingImage src='https://i.imgur.com/xguDr3e.png' />
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        The biggest issue I ran into was in making scoring consistent which
        proved difficult when using the logic that I employed with JS. I also
        limited the scope of the game in that I was writing the rounds of
        questions for topics manually. While this is great for customization, in
        order to build a larger app with more versatility fetching data from an
        API would save a lot of hours of coding.
      </ProjectDescription>
      <AccompanyingImage src='https://i.imgur.com/QYGeEWL.png' />
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
        I was ultimately able to find some creative solutions to solve the
        scoring problem in the short term, but ultimately a more viable solution
        was needed if I wanted to expand the scope of the game.
      </ProjectDescription>
    </Container>
  </Layout>
)

export default TriviaGame
