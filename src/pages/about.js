import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import Resume from "../images/images/Resume.pdf";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  width: 100%;
  /* border: 2px solid yellow; */
  padding: 20px 0;
  @media (min-width: 800px) {
    height: auto;
    flex-direction: row;
  }
`

const Headshot = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 800px) {
    height: auto;
    width: 40%;
    flex-direction: row;
  }
`

const ContactInfo = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 800px) {
    height: 100%;
    width: 40%;
    /* border: 1px solid blue; */
    margin: auto;
    flex-direction: row;
  }
`

const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 40px;
`

const AboutDetails = styled.h3`
  margin: 4px 0;
  font-size: 20px;
`

const GetInTouch = styled.a`
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

const Contact = () => (
  <Layout>
    <Container>
      <ContactInfo>
        <Title>My Background</Title>
        {/* <ContactDetails>Logan Circle</ContactDetails> */}
        <AboutDetails>
          I have always been interested in all things science and technology and
          I am excited to begin a rewarding career in software development. I am
          always striving to find innovative solutions to complex problems and development is the
          perfect outlet for that energy.
        </AboutDetails>
        <Title>Interests and Hobbies</Title>
        <AboutDetails>
          Besides always making an effort to learn about new technologies I am a
          huge movie buff and enjoy sports and poker.
        </AboutDetails>
      </ContactInfo>
      <Headshot src="https://i.imgur.com/9pPHICb.jpgalt="></Headshot>
    </Container>
    <GetInTouch
    href='/contact'>Contact Me</GetInTouch>
  </Layout>
)

export default Contact
