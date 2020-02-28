import React from "react"

// import fonts from "../styles.fonts"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  @media (min-width: 800px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
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

const MobileName = styled.h1`
  display: flex;
  margin: 0 0 2px 0;
  font-size: 36px;
  @media (min-width: 600px) {
    display: none;
  }
`

const Name = styled.h1`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    margin: 0 0 8px 0;
    font-size: 35px;
    font-size: 50px;
  }
`

const SoftwareDevloperLine = styled.div`
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
    width: 90%;
  }
`

const SkillsRowContainer = styled.div`
  width: 100%;
  @media (min-width: 520px) {
    width: 33.3%;
  }
`

const SubSectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 24px;
    font-weight: bold;
  }
`

const Schooling = styled.div`
  font-size: 22px;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 28px;
    font-weight: bold;
}
`

const City = styled.div`
  font-size: 18px;
  @media (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
`

const Dates = styled.div`
  font-size: 18px;
  @media (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
`

const Details = styled.div`
  font-size: 18px;
  @media (min-width: 800px) {
    font-size: 20px;
  }
`

const BulletPointWrap = styled.div`
  display: flex;
`

const ContactDetails = styled.h3`
  margin: 4px 0;
  font-size: 24px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`

const BulletPoints = styled.div`
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
  @media (min-width: 800px) {
    margin-top: 24px;
    font-size: 32px;
    width: 180px;
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
  font-size: 24px;
  @media (min-width: 800px) {
    font-size: 28px;
  }
`

const MobileLinkPlacer = styled.div`
  margin: 10px 0;
`

const MobileEmailLink = styled.a`
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
  @media (min-width: 600px) {
    display: none;
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const MobileLinkedInLink = styled.a`
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
  @media (min-width: 600px) {
    display: none;
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const EmailLink = styled.a`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
    font-size: 30px;
    /* border: 1px solid red; */
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const LinkedInLink = styled.a`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    color: black;
    text-shadow: 1px 1px 3px white;
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
    font-size: 30px;
    /* border: 1px solid red; */
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
              michaelndriscoll81@gmail.com
            </MobileEmailLink>
          </MobileLinkPlacer>
          <MobileLinkPlacer>
            <EmailLink
              href="mailto:michaelndriscoll81@gmail.com"
              target="_blank"
            >
              Email Link
            </EmailLink>
          </MobileLinkPlacer>
          <br />
          <MobileLinkedInLink
            href="https://www.linkedin.com/in/michael-n-driscoll/"
            target="_blank"
          >
            linkedin.com/in/michael-n-driscoll/
          </MobileLinkedInLink>
          <LinkedInLink
            href="https://www.linkedin.com/in/michael-n-driscoll/"
            target="_blank"
          >
            LinkedIn Link
          </LinkedInLink>
        </ContactInfo>
        <ButtonContainer>
          <PDFLink href="/resume-hard-copy">PDF Version</PDFLink>
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
        <SkillsRowContainer>
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
      <Details>
        Completed a 500 hour full stack immersive program and designed projects
        including:
      </Details>
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
