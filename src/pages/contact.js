import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  border: 2px solid yellow;
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

const Contact = () => (
  <Layout>
    <Container>
      <Headshot src="https://i.imgur.com/dOmiyM6.jpg" alt="the"></Headshot>
      <ContactInfo>
        <h1>Michael Driscoll</h1>
        <h3>Logan Circle</h3>
        <h3>Washington, DC 20005</h3>
        <h3>michaelndriscoll81@gmail.com</h3>
        <h3>585-719-7720</h3>
      </ContactInfo>
    </Container>
  </Layout>
)

export default Contact
