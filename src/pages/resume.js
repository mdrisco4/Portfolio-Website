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

const Questions = styled.div`
  width: 70%;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 28px;
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

const ContactDetails = styled.h3`
  margin: 4px 0;
  font-size: 24px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`

const AboutLink = styled.a`
  font-size: 25px;
  color: white;
  display: flex;
  width: 180px;
  height: auto;
  padding: 3px;
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
    /* border: 2px solid black; */
  }
`

const EmailLink = styled.a`
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin: 4px 0;
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
  margin: 4px 0;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 3px darkblue;
  }
`

const Resume = () => (
  <Layout>
    <h1>Michael Driscoll</h1>
    <h3>Software Developer</h3>
    <p>about me blurb</p>
    <h3>Contact Info</h3>
    <p>585-719-7720</p>
    <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
      michaelndriscoll81@gmail.com
    </EmailLink><br />
    <LinkedInLink
      href="https://www.linkedin.com/in/michael-n-driscoll/"
      target="_blank"
    >
      linkedin.com/in/michael-n-driscoll/
    </LinkedInLink>
    <AboutLink href="/resume-hard-copy">PDF Version</AboutLink>
    <h3>Skills</h3>
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
        <p>HTML/CSS</p>
        <p>Javascript</p>
        <p>Node.js</p>
      </div>
      <div
        style={{
          marginRight: "40px",
        }}
      >
        <p>Express</p>
        <p>React</p>
        <p>SQL</p>
      </div>
      <div
        style={{
          marginRight: "40px",
        }}
      >
        <p>Adobe XD</p>
        <p>Python/Django</p>
        <p>MongoDB</p>
      </div>
    </div>
    <h3>Experience</h3>
    <p>Software Engineering Immersive, General Assembly</p>
    <p>Washington, D.C.</p>
    <p>11/2019-2/2020</p>
    <p>
      Completed a 500 hour full stack immersive program and designed projects
      including:
    </p>
    <p>Front End Team Member, WhichCraft Brewing</p>
    <p>Rochester, NY</p>
    <p>3/2019-11/2019</p>
    <p>Front End Team Member, The Beer Market</p>
    <p>Rochester, NY</p>
    <p>4/2015-11/2019</p>
    <p>Image Science Department Intern, Exelis Geospatial Systems</p>
    <p>Rochester, NY</p>
    <p>6/2013-8/2013</p>
    <h3>Education</h3>
    <p>Full Stack Web Development Certificate, General Assembly</p>
    <p>Washington, D.C.</p>
    <p>11/2019-2/2020</p>
    <h3>Bachelor of Arts in Physics, University of Rochester</h3>
    <p>Rochester, NY</p>
    <p>1/2010-5/2013</p>
  </Layout>
)

export default Resume
