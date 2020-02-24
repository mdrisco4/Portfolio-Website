import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  width: 100%;
  border: 2px solid yellow;
  padding: 20px 0;
  @media (min-width: 800px) {
    height: auto;
    flex-direction: row;
  }
`

const Headshot = styled.img`
  border: 1px solid red;
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
    border: 1px solid blue;
    margin: auto;
    flex-direction: row;
  }
`

const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 30px;
`

const AboutDetails = styled.h3`
  margin: 4px 0;
  font-size: 16px;
`

const Contact = () => (
  <Layout>
    <Container>
      <ContactInfo>
        <Title>My Background</Title>
        {/* <ContactDetails>Logan Circle</ContactDetails> */}
        <AboutDetails>I have always been interested in all things science and technology and after diving into the world of craft beer after college always wanted to circle back around to that eventually.  My background in math molded me to be a very analytical thinker and problem solver and development is the perfect crossroad to utilize thise skills with a creative outlet.</AboutDetails>
        <Title>Interests and Hobbies</Title>
        <AboutDetails>Besides always striving to learn about new technologies I am a huge movie buff and enjoy sports and poker.</AboutDetails>
      </ContactInfo>
      <Headshot src="https://i.imgur.com/9pPHICb.jpgalt="></Headshot>
    </Container>
  </Layout>
)

export default Contact
