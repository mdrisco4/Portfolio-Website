import React from "react"

// import fonts from "../styles.fonts"
import Layout from "../components/layout"
import styled from "styled-components"

const ContactInfo = styled.div`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 50px;
  }
`

// const Questions = styled.div`
//   width: 70%;
//   text-align: center;
//   margin: auto;
//   margin-bottom: 30px;
//   font-size: 24px;
//   @media (min-width: 600px) {
//     font-size: 28px;
//   }
// `

const Container = styled.div`
  @media (min-width: 800px) {
      border: 1px solid green;
      width: 85%;
      margin-left: auto;
  margin-right: auto;
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

const Name = styled.h1`
  margin: 0 0 8px 0;
  font-family: "Krona One";
  font-size: 35px;
  @media (min-width: 800px) {
    font-size: 50px;
  }
`

const SectionTitle = styled.div`
        font-size: 24px;
        font-weight: bold;
    @media (min-width: 800px) {
        font-size: 32px;
        font-weight: bold;
    }
`

const SubSectionTitle = styled.div`
        font-size: 20px;
        font-weight: bold;
    @media (min-width: 800px) {
        font-size: 24px;
        font-weight: bold;
    }`

const Details = styled.div`
        font-size: 18px;
 @media (min-width: 800px) {
        font-size: 20px;
    }`

const ContactDetails = styled.h3`
  margin: 4px 0;
  font-size: 24px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`

const PDFLink = styled.a`
  font-size: 25px;
  color: white;
  display: flex;
  width: 180px;
  height: auto;
  padding: 3px;
  /* float: right; */
  margin-top: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  background-color: rgb(99, 95, 85);
  border: 2px solid darkblue;
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 2px solid black;
  }
`

const EmailLink = styled.a`
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  /* margin: 4px 0; */
  font-size: 20px;
  @media (min-width: 800px) {
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
  /* margin: 4px 0; */
  font-size: 20px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const Resume = () => (
  <Layout>
      <Container>
    <Name>Michael Driscoll</Name>
    <SectionTitle>Software Developer</SectionTitle>
    <Details>about me blurb</Details>
    <SectionTitle>Contact Info</SectionTitle>
    <Details>585-719-7720</Details>
    <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
      michaelndriscoll81@gmail.com
    </EmailLink><br />
    <LinkedInLink
      href="https://www.linkedin.com/in/michael-n-driscoll/"
      target="_blank"
    >
      linkedin.com/in/michael-n-driscoll/
    </LinkedInLink>
    <PDFLink href="/resume-hard-copy">PDF Version</PDFLink>
    <SectionTitle>Skills</SectionTitle>
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          marginRight: "40px",
        }}
      >
        <SubSectionTitle>∙ HTML/CSS</SubSectionTitle>
        <SubSectionTitle>∙ Javascript</SubSectionTitle>
        <SubSectionTitle>∙ Node.js</SubSectionTitle>
      </div>
      <div
        style={{
          marginRight: "40px",
        }}
      >
        <SubSectionTitle>∙ Express</SubSectionTitle>
        <SubSectionTitle>∙ React</SubSectionTitle>
        <SubSectionTitle>∙ SQL</SubSectionTitle>
      </div>
      <div
        style={{
          marginRight: "40px",
        }}
      >
        <SubSectionTitle>∙ Adobe XD</SubSectionTitle>
        <SubSectionTitle>∙ Python/Django</SubSectionTitle>
        <SubSectionTitle>∙ MongoDB</SubSectionTitle>
      </div>
    </div>
    <SectionTitle>Experience</SectionTitle>
    <SubSectionTitle>Software Engineering Immersive, General Assembly</SubSectionTitle>
    <Details>Washington, D.C.</Details>
    <Details>11/2019-2/2020</Details>
    <Details>
      Completed a 500 hour full stack immersive program and designed projects
      including:
    </Details>
    <SubSectionTitle>Front End Team Member, WhichCraft Brewing</SubSectionTitle>
    <Details>Rochester, NY</Details>
    <Details>3/2019-11/2019</Details>
    <SubSectionTitle>Front End Team Member, The Beer Market</SubSectionTitle>
    <Details>Rochester, NY</Details>
    <Details>4/2015-11/2019</Details>
    <SubSectionTitle>Image Science Department Intern, Exelis Geospatial Systems</SubSectionTitle>
    <Details>Rochester, NY</Details>
    <Details>6/2013-8/2013</Details>
    <SectionTitle>Education</SectionTitle>
    <SubSectionTitle>Full Stack Web Development Certificate, General Assembly</SubSectionTitle>
    <Details>Washington, D.C.</Details>
    <Details>11/2019-2/2020</Details>
    <SubSectionTitle>Bachelor of Arts in Physics, University of Rochester</SubSectionTitle>
    <Details>Rochester, NY</Details>
    <Details>1/2010-5/2013</Details>
    </Container>
  </Layout>
)

export default Resume
