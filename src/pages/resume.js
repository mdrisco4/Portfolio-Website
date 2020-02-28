import React from "react"

// import fonts from "../styles.fonts"
import Layout from "../components/layout"
import styled from "styled-components"


const Container = styled.div`
  @media (min-width: 800px) {
      border: 1px solid green;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    `

    const AboutMe = styled.div`
      @media (min-width: 600px) {
      }
    `
    
    const ContactInfo = styled.div`
      @media (min-width: 600px) {
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

const SkillsContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
  }
`

const SkillsRowContainer = styled.div`
  @media (min-width: 800px) {
    margin-right: 40px;
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
}`

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
      <div
        style={{
          display: "flex",
        }}
      >
        <AboutMe>
          <SectionTitle>Software Developer</SectionTitle>
          <Details>about me blurb</Details>
        </AboutMe>
        <ContactInfo>
          <SectionTitle>Contact Info</SectionTitle>
          <Details>585-719-7720</Details>
          <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
            Email
          </EmailLink>
          <br />
          <LinkedInLink
            href="https://www.linkedin.com/in/michael-n-driscoll/"
            target="_blank"
          >
            LinkedIn
          </LinkedInLink>
        </ContactInfo>
      </div>
      <PDFLink href="/resume-hard-copy">PDF Version</PDFLink>
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
        distribution representatives to promote 300+ products and host more than
        100+ industry events with attendance ranging from dozens to hundreds of
        customers and craft beer professionals
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
        updated GPS technology with adjustments for perpetual, small changes of
        the Earth’s axial tilt
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
      <SubSectionTitle>
        Full Stack Web Development Certificate, General Assembly
      </SubSectionTitle>
      <Details>Washington, D.C.</Details>
      <Dates>11/2019-2/2020</Dates>
      <SubSectionTitle>
        Bachelor of Arts in Physics, University of Rochester
      </SubSectionTitle>
      <Details>Rochester, NY</Details>
      <Details>1/2010-5/2013</Details>
    </Container>
  </Layout>
)

export default Resume
