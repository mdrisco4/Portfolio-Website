import React from "react"
import "../styles/fonts.css"
import Layout from "../components/layout"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const PageTitle = styled.div`
  /* color: white; */
  font-family: "Montserrat Alternates";
  /* color: rgb(137, 146, 173); */
  color: rgb(206, 214, 243);
  font-size: 55px;
  text-align: center;
  padding-top: 100px;
`

const ContactInfo = styled.div`
  font-family: "Montserrat Alternates";
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    font-size: 50px;
  }
`

const Questions = styled.div`
  font-family: "Montserrat Alternates";
  width: 70%;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;
  font-size: 24px;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    font-size: 28px;
    max-width: 800px;
  }
`

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

const MyInfo = styled.div`
  width: 100%;
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

const Name = styled.h3`
  font-family: "Montserrat Alternates";
  margin: 0 0 8px 0;
  font-size: 35px;
  color: rgb(77, 84, 107);
  @media (min-width: 800px) {
    font-size: 50px;
  }
`

const ContactDetails = styled.h3`
  font-family: "Montserrat Alternates";
  margin: 4px 0;
  font-size: 24px;
  color: rgb(77, 84, 107);
  padding-bottom: 30px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`

const PhoneLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  /* text-shadow: 1px 1px 1px white; */
  text-decoration: none;
  font-weight: 900;
  margin: 4px 5%;
  font-size: 24px;
  color: rgb(114, 200, 179);
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    /* color: darkblue; */
    /* text-shadow: 4px 4px 5px darkblue; */
    color: #6ab4ff;
    text-shadow: 0 0 5px;
    /* filter:drop-shadow(1px 1px white); */
  }
`

const EmailLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin: 4px 5%;
  font-size: 24px;
  /* color: rgb(137, 146, 173); */
  color: rgb(114, 200, 179);
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    /* color: darkblue; */
    /* text-shadow: 4px 4px 5px darkblue; */
    text-shadow: 0 0 5px;
    color: #6ab4ff;
    filter: drop-shadow(2px 2px rgb(114, 200, 179));
  }
`

const LinkedInLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin: 4px 5%;
  font-size: 24px;
  /* color: rgb(137, 146, 173); */
  color: rgb(114, 200, 179);
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    /* color: darkblue; */
    /* text-shadow: 4px 4px 5px darkblue; */
    text-shadow: 0 0 5px;
    color: #6ab4ff;
    filter: drop-shadow(2px 2px rgb(114, 200, 179));
  }
`

const GitHubLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin: 4px 5%;
  font-size: 24px;
  /* color: rgb(137, 146, 173); */
  color: rgb(114, 200, 179);
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    /* color: darkblue; */
    /* text-shadow: 4px 4px 5px darkblue; */
    text-shadow: 0 0 5px;
    color: #6ab4ff;
    filter: drop-shadow(2px 2px rgb(114, 200, 179));
  }
`

const Contact = () => (
  <Layout>
    <PageTitle>CONTACT INFO</PageTitle>
    {/* <ContactInfo>Under construction</ContactInfo> */}
    <Questions>
      {/* I’d love to hear from you! Whether you have a project idea, a question
      about my work, or just want to connect, feel free to reach out. Drop me a
      message using the form below, or contact me directly by email. Let’s
      collaborate and turn your vision into reality! */}
      I’d love to hear from you! Whether you have a project idea, a question
      about my work, or just want to connect, feel free to reach out. Drop me a
      message using the links below and let’s collaborate and turn your vision
      into reality!
    </Questions>
    <hr
      style={{
        border: "1px solid rgb(114, 200, 179)",
        marginTop: "50px",
      }}
    ></hr>
    <Container>
      <MyInfo>
        <Name>Michael Driscoll</Name>
        {/* <PhoneLink href="tel:1-585-719-7720">1-234-567-8901</PhoneLink> */}
        <ContactDetails>Los Angeles, CA 90028</ContactDetails>
        <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
          <FontAwesomeIcon icon={["far", "envelope"]} size="3x" />
        </EmailLink>
        <LinkedInLink
          href="https://www.linkedin.com/in/michael-n-driscoll/"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </LinkedInLink>
        <GitHubLink href="https://github.com/mdrisco4" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
        </GitHubLink>
      </MyInfo>
    </Container>
    <hr
      style={{
        border: "1px solid rgb(114, 200, 179)",
        // marginTop: "50px",
      }}
    ></hr>
  </Layout>
)

export default Contact
