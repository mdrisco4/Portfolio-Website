import React from "react"
import "../styles/fonts.css"

import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
  @media (min-width: 1100px) {
    height: auto;
    flex-direction: row;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Headshot = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 850px) {
    height: auto;
    width: 40%;
    flex-direction: row;
  }
`

const PersonalInfo = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 850px) {
    height: 100%;
    margin: auto;
    flex-direction: row;
  }
`

const Title = styled.h1`
  font-family: "Montserrat Alternates";
  margin: 0 0 8px 0;
  font-size: 40px;
`

const AboutDetails = styled.h3`
  font-family: "Montserrat Alternates";
  margin: 4px 0;
  font-size: 20px;
`

const GetInTouch = styled.a`
  font-family: "Montserrat Alternates";
  font-size: 40px;
  color: white;
  background-color: rgb(99, 95, 85);
  display: flex;
  width: 320px;
  height: auto;
  padding: 3px;
  margin-top: 20px;
  justify-content: center;
  border: 4px solid darkblue;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  text-decoration: none;
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const About = () => (
  <Layout>
    <Container>
      <PersonalInfo>
        <Title>My Background</Title>
        <AboutDetails>
          I graduated from the University of Rochester with a physics degree in
          2013 and have always been interested in all things science and
          technology. I am always seeking to challenge myself and tackle new
          challenges and software development is the perfect outlet for that
          drive. Currently with the skills to meet a junior level role I would
          love to manage my own team a few years down the road.
        </AboutDetails>
        <Title>Interests and Hobbies</Title>
        <AboutDetails>
          Besides always making an effort to learn about new technologies I am a
          huge movie buff and craft beer enthusiast and enjoy sports, poker and
          enjoying nature whenever I can.
        </AboutDetails>
      </PersonalInfo>
      <Headshot src="https://i.imgur.com/9pPHICb.jpgalt="></Headshot>
    </Container>
    <GetInTouch href="/contact">Contact Me</GetInTouch>
  </Layout>
)

export default About
