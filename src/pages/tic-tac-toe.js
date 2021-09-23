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

const TicTacToeGame = () => (
  <Layout>
    <Container>
      <Title>Tic Tac Toe Game</Title>
      <ProjectLinkContainer>
        <DeployedLink
          href="https://tic-tac-toe-game-six.vercel.app/"
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
        One of my early projects, I wrote this game using HTML, CSS and Vanilla
        JS. It employs some simple functions to allow the user and a friend to
        play a quick and fun game of Tic-Tac-Toe. The winner is announced at the
        end, or in the case of a stalemate, a Tie is declared and the game can
        be reset with the 'Reset' button.
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/6DMtsb0.png" />
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        Using some basics I had learned at the time with DOM manipulation, CSS
        code and simple Javascript functions the game is quick and easy to play.
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/xguDr3e.png" />
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        This was a simple enough project and served as a practice run at
        applying some of the beginner skills I had learned as a developer.
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/QYGeEWL.png" />
      <SectionTitle>Additional Information</SectionTitle>
      <ProjectDescription>
        Give it a go and play a few games!!
      </ProjectDescription>
    </Container>
  </Layout>
)

export default TicTacToeGame
