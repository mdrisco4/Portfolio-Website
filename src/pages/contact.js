import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Name = styled.h1`
  margin: 0 0 8px 0;
  font-size: 30px;
`

const ContactDetails = styled.h3`
  margin: 4px 0;
  font-size: 20px;
`

const Contact = () => (
  <Layout>
    <Container>
      <Headshot src="https://i.imgur.com/dOmiyM6.jpg" alt="the"></Headshot>
      <ContactInfo>
        <Name>Michael Driscoll</Name>
        {/* <ContactDetails>Logan Circle</ContactDetails> */}
        <ContactDetails>Washington, DC 20005</ContactDetails>
        <ContactDetails>michaelndriscoll81@gmail.com</ContactDetails>
        <ContactDetails>585-719-7720</ContactDetails>
      </ContactInfo>
    </Container>
  </Layout>
)

export default Contact
