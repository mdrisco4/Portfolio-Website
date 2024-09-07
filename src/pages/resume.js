import React from "react"
import "../styles/fonts.css"

import Layout from "../components/layout"
import styled from "styled-components"
import MichaelDriscoll2023Resume from "../images/MichaelDriscoll2023Resume.pdf"

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
color: rgb(137, 146, 173);
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
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    display: none;
  }
`

const Name = styled.h1`
  font-family: "Montserrat Alternates";
  display: none;
  color: rgb(137, 146, 173);
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
  color: rgb(137, 146, 173);
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
  color: rgb(137, 146, 173);
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
  font-size: 18px;
  font-weight: bold;
  color: rgb(137, 146, 173);
  @media (min-width: 800px) {
    font-size: 24px;
    font-weight: bold;
  }
`

const Schooling = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 22px;
  font-weight: bold;
  color: rgb(137, 146, 173);
  @media (min-width: 800px) {
    font-size: 28px;
    font-weight: bold;
  }
`

const City = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
`

const Dates = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
`

const Details = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  color: rgb(137, 146, 173);
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
  color: rgb(137, 146, 173);
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
  color: rgb(137, 146, 173);
  border: 2px solid darkblue;
  /* border-radius: 20px; */
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
  color: rgb(137, 146, 173);
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
  color: rgb(137, 146, 173);
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
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    display: none;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const PhoneLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 1px white;
  text-decoration: none;
  font-weight: 900;
  /* margin: 4px 5%; */
  font-size: 24px;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    font-size: 21px;
  }
  @media (min-width: 720px) {
    font-size: 25px;
  }
  @media (min-width: 925px) {
    font-size: 28px;
  }
  @media (min-width: 1020px) {
    font-size: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 35px;
  }
  &:hover {
    color: darkblue;
    text-shadow: 2px 2px 3px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const EmailLink = styled.a`
  font-family: "Montserrat Alternates";
  display: none;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    padding-left: 5%;
    margin-right: 55%;
    color: rgb(137, 146, 173);
  }
  &:hover {
    color: rgb(137, 146, 173);
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const LinkedInLink = styled.a`
  font-family: "Montserrat Alternates";
  display: none;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    padding-left: 7%;
    margin-right: 65%;
    color: rgb(137, 146, 173);
  }
  &:hover {
    color: rgb(137, 146, 173);
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const GitHubLink = styled.a`
  font-family: "Montserrat Alternates";
  display: none;
  color: rgb(137, 146, 173);
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    padding-left: 5%;
    margin-top: 6px;
    margin-right: 55%;
    color: rgb(137, 146, 173);
  }
  &:hover {
    color: rgb(137, 146, 173);
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const Resume = () => (
  <Layout>
    <Container>
      <Name>Michael Driscoll</Name>
      <AboutContactContainer>Under construction</AboutContactContainer>
      <AboutContactContainer>
        <AboutMe>
          <SoftwareDevloperLine>Software Developer</SoftwareDevloperLine>
          <Details>
            {/* Full stack software engineer experienced working on an Agile team
            and freelance projects for clients. As a craft beer professional I
            was able to take client feedback and translate that into usable
            concepts for beer recipes to make in collaboration with local
            breweries, as well as coordinating events to showcase them.
            Combining my experience in client facing roles and software
            engineering I am seeking the opportunity to contribute to a company
            exceeding client expectations by utilizing cutting edge technology. */}
            Full stack software engineer experienced working both on an Agile
            team and developing freelance projects for clients. As a government
            contractor I have experience working in a team environment and
            engaging government representatives to ensure assignments are
            completed by designated deadlines. Combining my experience in client
            facing roles and the technical side of development I am seeking the
            opportunity to be a valued and contributing team member and exceed
            client expectations utilizing cutting edge technology.


            Full stack software engineer experienced working both in Agile team
            environments and developing freelance projects for clients.
            Extensive experience working between client facing roles and the
            technical side of development on complex projects. Currently seeking
            new opportunities to be a valued and contributing team member and
            exceed client expectations utilizing cutting edge technology.
          </Details>
        </AboutMe>
        <ContactInfo>
          <MobileName>Michael Driscoll</MobileName>
          <SectionTitle>Contact Info</SectionTitle>
          {/* <PhoneLink href="tel:1-585-719-7720">1-585-719-7720</PhoneLink> */}
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
          <PDFLink href={MichaelDriscoll2023Resume} download>
            PDF Download
          </PDFLink>
        </ButtonContainer>
      </AboutContactContainer>
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
        <SkillsRowContainer>
          <SubSectionTitle>∙ HTML</SubSectionTitle>
          <SubSectionTitle>∙ CSS</SubSectionTitle>
          <SubSectionTitle>∙ JavaScript</SubSectionTitle>
          <SubSectionTitle>∙ Jira</SubSectionTitle>
        </SkillsRowContainer>
        <SkillsRowContainer>
          <SubSectionTitle>∙ React/Gatsby</SubSectionTitle>
          <SubSectionTitle>∙ Vue.js</SubSectionTitle>
          <SubSectionTitle>∙ Node.js</SubSectionTitle>
          <SubSectionTitle>∙ Express.js</SubSectionTitle>
        </SkillsRowContainer>
        <SkillsRowContainer
          style={{
            width: "45%",
          }}
        >
          <SubSectionTitle>∙ Python/Django</SubSectionTitle>
          <SubSectionTitle>∙ PostgreSQL</SubSectionTitle>
          <SubSectionTitle>∙ MongoDB</SubSectionTitle>
          <SubSectionTitle>∙ Contentful</SubSectionTitle>
        </SkillsRowContainer>
      </SkillsContainer>
      <SectionTitle>Experience</SectionTitle>

      <SubSectionTitle>Freelance, IT Consultant</SubSectionTitle>
      <City>Washington, D.C.</City>
      <Dates>8/2013-Current</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Design and develop web applications using OOP while employing full
          stack technologies
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Consulted small businesses by maintaining working logs which detail
          all required system updates and assist in facilitating completion
        </BulletPoints>
      </BulletPointWrap>

      <SubSectionTitle style={{ fontWeight: "bold" }}>
        Kreative technologies
      </SubSectionTitle>
      <City>Fairfax, VA</City>
      <SubSectionTitle>Software Engineer I</SubSectionTitle>
      <Dates>02/2022-Present</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Worked in an Agile environment and engaged with government
          representatives in order to review project requirements and utilize
          Jira to ensure project specifications are met each sprint on the basis
          of priority
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Engineered JavaScript solutions to bridge viability gaps on a low code
          platform while working alongside a C#/.NET team to migrate millions of
          records from a legacy system into SQL database
        </BulletPoints>
      </BulletPointWrap>


      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Participated in successful launch of three year project as a
          contributing developer for 2+ years
        </BulletPoints>
      </BulletPointWrap>


      <SubSectionTitle>Junior Software Developer</SubSectionTitle>
      <Dates>09/2020-02/2022</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Facilitated backend development to meet contract requirements on project for the Defense Health Agency
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Collaborated with team members to complete assignments for full stack development on project for the Department of Defense
        </BulletPoints>
      </BulletPointWrap>

      <SubSectionTitle>
        Software Engineering Immersive, General Assembly
      </SubSectionTitle>
      <City>Washington, D.C.</City>
      <Dates>11/2019-2/2020</Dates>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Applied web developer skills in MVC framework to group and individual
          projects during a 500-hour course
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Developed fundamentals learning coding basics and developing projects
          using HTML, CSS and JavaScript and developing full stack interactive
          applications with frameworks including React and Django, employing a
          variety of tools to build and deploy databases including MongoDB,
          Express and SQL
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Gained real work experience working on a collaborative, open source
          client project, providing front end code to complete assignments on a
          team working in an Agile environment
        </BulletPoints>
      </BulletPointWrap>
      <BulletPointWrap>
        <Details>∙</Details>
        <BulletPoints>
          Sought out and completed projects as a freelance developer working
          with clients to create fullstack applications that fit specifications
          provided
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
          than 100+ industry events with attendance ranging from 50 to
          200+ customers and craft beer professionals
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
