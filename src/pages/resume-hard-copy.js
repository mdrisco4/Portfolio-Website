import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import Resume from "../images/images/Resume.pdf";

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  justify-content: space-around;
  width: 100%;
  /* border: 2px solid yellow; */
  padding: 20px 0;
  @media (min-width: 800px) {
    height: auto;
    flex-direction: row;
  }
`

const MyInfo = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 800px) {
    height: 100%;
    width: 70%;
    margin: auto;
    flex-direction: row;
  }
`

const EmailLink = styled.a`
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const LinkedInLink = styled.a`
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const Contact = () => (
  <Layout>
    <Container>
    <img src="https://i.imgur.com/LHnhYGI.png"
    style={{
      width: '90%',
      marginLeft: '5%',
      marginRight: '5%',
    }}></img><br />
    <MyInfo>
    <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
      michaelndriscoll81@gmail.com
    </EmailLink><br />
    <LinkedInLink
      href="https://www.linkedin.com/in/michael-n-driscoll/"
      target="_blank"
      >
      linkedin.com/in/michael-n-driscoll/
    </LinkedInLink>
      </MyInfo>
    </Container>
  </Layout>
)

export default Contact
