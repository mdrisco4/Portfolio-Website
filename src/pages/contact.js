import React from "react"

// import fonts from "../styles.fonts"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  border-radius: 18px;
  height: 40%;
  /* width: 80%; */
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
    width: 50%;
    /* border: 1px solid blue; */
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
  text-decoration: none;
  margin: 4px 0;
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: yellow;
  }
`

const LinkedInLink = styled.a`
color: black;
  text-decoration: none;
  margin: 4px 0;
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: yellow;
  }
  `

const Contact = () => (
  <Layout>
    <h1
      style={{
        textAlign: "center",
        fontSize: "45px",
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
      }}
    >
      If you have any questions about my projects or want to know more please
      reach out by email, LinkedIn or phone!
    </h3>
    <Container>
      {/* <Headshot src="https://i.imgur.com/7vKUNGr.jpg" alt="the"></Headshot> */}
      <ContactInfo>
        <Name>Michael Driscoll</Name>
        {/* <ContactDetails>Logan Circle</ContactDetails> */}
        <ContactDetails>Logan Circle</ContactDetails>
        <ContactDetails>Washington, DC 20005</ContactDetails>
        <ContactDetails>585-719-7720</ContactDetails>
        <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
          michaelndriscoll81@gmail.com
        </EmailLink><br />
        <LinkedInLink
          href="https://www.linkedin.com/in/michael-n-driscoll/"
          target="_blank"
        >
          linkedin.com/in/michael-n-driscoll/
        </LinkedInLink>
        {/* <ContactDetails>585-719-7720</ContactDetails> */}
      </ContactInfo>
    </Container>
  </Layout>
)

export default Contact
