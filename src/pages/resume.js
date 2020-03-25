import React from "react"
import "../styles/fonts.css"

import Layout from "../components/layout"
import styled from "styled-components"
import MichaelDriscollResume from "../images/MichaelDriscollResume.pdf"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const Container = styled.div`
  @media (min-width: 800px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    max-width: 1200px;
  }
`
const AboutContactContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const AboutMe = styled.div`
  @media (min-width: 600px) {
    width: 40%;
  }
`

const ContactInfo = styled.div`
  @media (min-width: 600px) {
    width: 30%;
    padding-left: 10px;
  }
`

// const MyInfo = styled.div`
//   width: 80%;
//   margin-left: auto;
//   margin-right: auto;
//   text-align: center;
//   @media (min-width: 800px) {
//     height: 100%;
//     width: 70%;
//     margin: auto;
//     flex-direction: row;
//   }
// `

const MobileName = styled.h1`
  font-family: "Montserrat Alternates";
  display: flex;
  margin: 0 0 2px 0;
  font-size: 36px;
  @media (min-width: 600px) {
    display: none;
  }
`

const Name = styled.h1`
  font-family: "Montserrat Alternates";
  display: none;
  @media (min-width: 600px) {
    display: flex;
    margin: 0 0 8px 0;
    font-size: 35px;
    font-size: 50px;
  }
`

const SoftwareDevloperLine = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
  @media (min-width: 600px) {
    margin-top: 0;
    font-size: 36px;
    font-weight: bold;
  }
`

const SectionTitle = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 24px;
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 36px;
    font-weight: bold;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 520px) {
    flex-direction: row;
    width: 105%;
  }
`

const SkillsRowContainer = styled.div`
  width: 100%;
  @media (min-width: 520px) {
    width: 42%;
  }
`

const SubSectionTitle = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 20px;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 24px;
    font-weight: bold;
  }
`

const Schooling = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 22px;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 28px;
    font-weight: bold;
  }
`

const City = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  @media (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
`

const Dates = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  @media (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
`

const Details = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  @media (min-width: 800px) {
    font-size: 20px;
  }
`

const BulletPointWrap = styled.div`
  display: flex;
`

// const ContactDetails = styled.h3`
//   margin: 4px 0;
//   font-size: 24px;
//   @media (min-width: 800px) {
//     font-size: 30px;
//   }
// `

const BulletPoints = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  @media (min-width: 800px) {
    font-size: 20px;
    margin-left: 12px;
  }
`

const ButtonContainer = styled.div`
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 800px) {
    width: 30%;
  }
`

const PDFLink = styled.a`
  font-family: "Montserrat Alternates";
  font-size: 20px;
  color: white;
  display: flex;
  width: auto;
  height: 36px;
  padding: 10px 3px 3px 3px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  background-color: rgb(99, 95, 85);
  border: 2px solid darkblue;
  @media (min-width: 900px) {
    margin-top: 24px;
    font-size: 32px;
    width: 260px;
    height: auto;
    margin-top: 40px;
    padding: 10px;
  }
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 2px solid black;
  }
`

const Phone = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 24px;
  @media (min-width: 800px) {
    font-size: 28px;
  }
`

const MobileLinkPlacer = styled.div`
  margin: 10px 4px;
`

const MobileEmailLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
  @media (min-width: 600px) {
    display: none;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const MobileLinkedInLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
  margin-left: 10%;
  @media (min-width: 600px) {
    display: none;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const MobileGitHubLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
  margin-left: 10%;
  @media (min-width: 600px) {
    display: none;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const EmailLink = styled.a`
  font-family: "Montserrat Alternates";
  display: none;
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    padding-left: 5%;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const LinkedInLink = styled.a`
  font-family: "Montserrat Alternates";
  display: none;
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    padding-left: 7%;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const GitHubLink = styled.a`
  font-family: "Montserrat Alternates";
  display: none;
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    padding-left: 5%;
    margin-top: 6px;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const Resume = () => (
  <Layout>
    <Container>
      <Name>Michael Driscoll</Name>
      <AboutContactContainer>
        <AboutMe>
          <SoftwareDevloperLine>Software Developer</SoftwareDevloperLine>
          <Details>
            As a growing software engineer with client experience and
            proficiency in web design, coding and full stack development, I
            bring to the table a variety of skills paramount to success in the
            workplace. I am excited to grow in the tech industry using my
            talents in software engineering while continually seeking to keep up
            with the latest in cutting edge technology.
          </Details>
        </AboutMe>
        <ContactInfo>
          <MobileName>Michael Driscoll</MobileName>
          <SectionTitle>Contact Info</SectionTitle>
          <Phone>585-719-7720</Phone>
          <MobileLinkPlacer>
            <MobileEmailLink
              href="mailto:michaelndriscoll81@gmail.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={["far", "envelope"]} size="3x" />
            </MobileEmailLink>
            <MobileLinkedInLink
              href="https://www.linkedin.com/in/michael-n-driscoll/"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
            </MobileLinkedInLink>
            <MobileGitHubLink
              href="https://github.com/mdrisco4"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
            </MobileGitHubLink>
          </MobileLinkPlacer>
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
        </ContactInfo>
        <ButtonContainer>
          <PDFLink href={MichaelDriscollResume} download>
            PDF Download
          </PDFLink>
        </ButtonContainer>
      </AboutContactContainer>
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
        <SkillsRowContainer>
          <SubSectionTitle>∙ HTML/CSS</SubSectionTitle>
          <SubSectionTitle>∙ Javascript</SubSectionTitle>
          <SubSectionTitle>∙ Node.js</SubSectionTitle>
        </SkillsRowContainer>
        <SkillsRowContainer>
          <SubSectionTitle>∙ Express</SubSectionTitle>
          <SubSectionTitle>∙ React</SubSectionTitle>
          <SubSectionTitle>∙ SQL</SubSectionTitle>
        </SkillsRowContainer>
        <SkillsRowContainer
          style={{
            width: "45%",
          }}
        >
          <SubSectionTitle>∙ Adobe XD</SubSectionTitle>
          <SubSectionTitle>∙ Python/Django</SubSectionTitle>
          <SubSectionTitle>∙ MongoDB</SubSectionTitle>
        </SkillsRowContainer>
      </SkillsContainer>
      <SectionTitle>Experience</SectionTitle>
      <SubSectionTitle>
        Software Engineering Immersive, General Assembly
      </SubSectionTitle>
      <City>Washington, D.C.</City>
      <Dates>11/2019-2/2020</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Developed fundamentals learning coding basics and developing projects
          using HTML, CSS and Javascript
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Learned how to develop full stack interactive applications with React
          front ends and employing a variety of tools to build and deploy
          databases including MongoDB, Express, Django and SQL
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Gained real work experience working on a client project for production
          that is currently in development
        </BulletPoints>
      </BulletPointWrap>
      <SubSectionTitle>
        Front End Team Member, WhichCraft Brewing
      </SubSectionTitle>
      <City>Rochester, NY</City>
      <Dates>3/2019-11/2019</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Provided experienced feedback and recommendations for weekly
          introductions of new and unique products manufactured at our on site
          production brewery helping to boost sales for inhouse products, got
          positive feedback and provided an all around enjoyable experience
        </BulletPoints>
      </BulletPointWrap>
      <SubSectionTitle>Front End Team Member, The Beer Market</SubSectionTitle>
      <City>Rochester, NY</City>
      <Dates>4/2015-11/2019</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Developed relationships in the industry with brewery owners and
          distribution representatives to promote 300+ products and host more
          than 100+ industry events with attendance ranging from dozens to
          hundreds of customers and craft beer professionals
        </BulletPoints>
      </BulletPointWrap>
      <SubSectionTitle>
        Image Science Department Intern, Exelis Geospatial Systems
      </SubSectionTitle>
      <City>Rochester, NY</City>
      <Dates>6/2013-8/2013</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Executed objectives for three contract assignments to build software
          with Mathematica and Matlab that 1) modeled optical systems and 2)
          updated GPS technology with adjustments for perpetual, small changes
          of the Earth’s axial tilt
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Conducted extensive research on satellite optical systems and GPS
          synchronization in the Image Science Department at Exelis, a leading
          aerospace and defense contractor, to develop analytical software tools
          for deployment in government programs
        </BulletPoints>
      </BulletPointWrap>
      <SectionTitle>Education</SectionTitle>
      <Schooling>
        Full Stack Web Development Certificate, General Assembly
      </Schooling>
      <City>Washington, D.C.</City>
      <Dates>11/2019-2/2020</Dates>
      <Schooling>
        Bachelor of Arts in Physics, University of Rochester
      </Schooling>
      <City>Rochester, NY</City>
      <Dates>1/2010-5/2013</Dates>
    </Container>
  </Layout>
)

export default Resume
