import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
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
  @media (min-width: 850px) {
    width: 42%;
  }
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const Title = styled.h1`
  font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 36px;
`

const ProjectDescription = styled.p`
  font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
`

const AccompanyingImage = styled.img`
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 20px;
`

const TriviaGame = () => (
  <Layout>
    <Container>
      <Title>Trivia Game</Title>
      <ProjectLinkContainer>
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
      </ProjectLinkContainer>
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        I wrote this game using HTML, CSS and Vanilla JS. Rather than being
        populated with data fetched from a trivia API I opted to write the
        questions myself with the idea being that I could write sets of trivia
        questions across different categories of my choosing for users to
        choose.
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/6DMtsb0.png" />
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        The first thing I needed to figure when beginning this project was what
        kind of layout I wanted to have and how I would write the logic for DOM
        manipulation and functionality to be interactive. I opted to write a few
        short sets of questions for each one of three separate topics from which
        the user could choose.
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/xguDr3e.png" />
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        The biggest issue I ran into was in making scoring consistent which
        proved difficult when using the logic that I employed with JS. I also
        limited the scope of the game in that I was writing the rounds of
        questions for topics manually. While this is great for customization, in
        order to build a larger app with more versatility fetching data from an
        API would save a lot of hours of coding.
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/QYGeEWL.png" />
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
        I was ultimately able to find some creative solutions to solve the
        scoring problem in the short term, but ultimately a more viable solution
        was needed if I wanted to expand the scope of the game. I also may
        return to this project with my experience in backend development that I
        did not have at the time to seed a database with my own custom quizzes.
      </ProjectDescription>
    </Container>
  </Layout>
)

export default TriviaGame
