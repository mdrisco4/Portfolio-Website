import React from "react"

// import fonts from "../styles.fonts"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
  @media (min-width: 800px) {
    height: auto;
    flex-direction: row;
  }
`

const Headshot = styled.img`
  border: 1px solid black;
  border-radius: 18px;
  height: 40%;
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
    width: 70%;
    margin: auto;
    flex-direction: row;
  }
`

const Name = styled.h1`
  margin: 0 0 8px 0;
  font-size: 50px;
  font-family: 'Krona One', ;

`

const ContactDetails = styled.h3`
  margin: 4px 0;
  font-size: 30px;
`

const EmailLink = styled.a`
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  margin: 4px 0;
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const LinkedInLink = styled.a`
color: black;
text-shadow: 1px 1px 3px white;
  text-decoration: none;
  margin: 4px 0;
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
  `

const GitHubLink = styled.a`
color: black;
text-shadow: 1px 1px 3px white;
  text-decoration: none;
  margin: 4px 0;
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
  `

const Contact = () => (
  <Layout>
    <h1
      style={{
        textAlign: "center",
        fontSize: "50px",
        // color: "rgb(99, 95, 85)",
      }}
    >
      Contact Info
    </h1>
    <h3
      style={{
        width: "70%",
        textAlign: "center",
        margin: "auto",
        fontSize: "28px",
        marginBottom: "30px",
        // color: "rgb(99, 95, 85)",
      }}
    >
      If you have any questions about my projects or want to know more please
      reach out by email or LinkedIn!
    </h3>
    <hr
    style={{
      border: "1px solid black"
    }}></hr>
    <Container>
      {/* <Headshot src="https://i.imgur.com/7vKUNGr.jpg" alt="the"></Headshot> */}
      <ContactInfo>
        <Name>Michael Driscoll</Name>
        <ContactDetails>Washington, DC 20005</ContactDetails>
        <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
          michaelndriscoll81@gmail.com
        </EmailLink><br />
        <LinkedInLink
          href="https://www.linkedin.com/in/michael-n-driscoll/"
          target="_blank"
        >
          linkedin.com/in/michael-n-driscoll/
        </LinkedInLink><br />
        <GitHubLink href="https://github.com/mdrisco4" target="_blank">
        github.com/mdrisco4
      </GitHubLink>
      </ContactInfo>
    </Container>
      <hr
      style={{
        border: "1px solid black"
      }}></hr>
  </Layout>
)

export default Contact
