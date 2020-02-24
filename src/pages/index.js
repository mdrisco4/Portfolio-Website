import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IntroContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const PersonalPhoto = styled.img`
    width: 70%;
    height: auto;
    border: 5px solid red;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
      @media (min-width: 600px) {
    height: 250px;
    width: 45%;
  }
`

const PersonalInfoContainer = styled.div`
    width: 70%;
    height: auto;
    border: 5px solid yellow;
    margin-left: auto;
    margin-right: auto;
      @media (min-width: 600px) {
    height: 240px;
    width: 45%;
    margin-left: 5%;
    padding: 5px;
  }
`

const LearnMore = styled.a`
  margin-left: 30px;
  color: black;
  text-decoration: none;
  font-size: 25px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 40px;
  width: 20%;
  height: 60px;
  border: 4px solid black;
  border-radius: 15px;
  cursor: pointer;
`



const IndexPage = () => (
  <Layout>
    <IntroContainer>
      <PersonalPhoto
        src="../images.photo.png"
      ></PersonalPhoto>
      <PersonalInfoContainer>
        <h1>Michael Driscoll</h1>
        <p>Engineering innovative solutions in a fast paced industry</p>
        <p>
          As a growing software engineer with client experience and proficiency
          in web design, coding and full stack development, I bring to the table
          a variety of skills paramount to success in the workplace. I am
          excited to grow in the tech industry using my talents in software
          engineering while continually seeking to keep up with the latest in
          cutting edge technology.
        </p>
      </PersonalInfoContainer>
    </IntroContainer>
    <img
      src=""
      alt="ther"
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: "50px",
        width: "70%",
        height: 260,
        display: "block",
        marginTop: "40px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></img>
    <p
      className="project-1-title"
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "32px",
      }}
    >
      Modern Troussaeu
    </p>
    <p
      className="project-1-description"
      style={{
        textAlign: "center",
        width: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      This is a client project in which I was a member of the front end
      development team
    </p>
    <LearnMore
      href="/portfolio/">
      <Link to="/modern-trousseau">Learn More</Link>
    </LearnMore>
    <img
      src=""
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: "50px",
        width: "70%",
        height: 260,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></img>
    <p
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "32px",
      }}
    >
      National Parks Website
    </p>
    <p
      className="project-1-description"
      style={{
        textAlign: "center",
        width: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      This is an interactive site that I built with API fetches that provides
      users links to pages with detailed descriptions of dozens of National
      Parks around the country
    </p>
    <LearnMore
      href="/portfolio/">
      <Link to="/national-parks">Learn More</Link>
    </LearnMore>
    <img
      src=""
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: "50px",
        width: "70%",
        height: 260,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></img>
    <p
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "32px",
      }}
    >
      MERN Full Stack App
    </p>
    <p
      className="project-1-description"
      style={{
        textAlign: "center",
        width: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      This is a full stack application that I built with an API I deployed and a
      React frontend
    </p>
    <LearnMore
      href="/trivia-game/">
      <Link to="/mern-full-stack">Learn More</Link>
    </LearnMore>
    <img
      src="../images/triviaStill.png"
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: "50px",
        width: "70%",
        height: 260,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></img>
    <p
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "32px",
      }}
    >
      Trivia Game
    </p>
    <p
      className="project-1-description"
      style={{
        textAlign: "center",
        width: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      This is an interactive game that I built using basic HTML, CSS and
      Javascript that allows the users to enjoy a fun trivia game with a variety
      of topics
    </p>
    <LearnMore
      href="/portfolio/">
      <Link to="/trivia-game">Learn More</Link>
    </LearnMore>
    <div
      className="footer-links"
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <a
        href="https://github.com/mdrisco4"
        target="_blank"
        style={{
          marginLeft: "30px",
          color: `yellow`,
          backgroundColor: "blue",
          textDecoration: `none`,
          fontSize: "25px",
          border: "4px solid red",
        }}
      >
        Email
      </a>
      {/* <br></br> */}
      <a
        href="https://www.linkedin.com/in/michael-n-driscoll/"
        target="_blank"
        style={{
          marginLeft: "30px",
          color: `yellow`,
          backgroundColor: "blue",
          textDecoration: `none`,
          fontSize: "25px",
          border: "4px solid red",
        }}
      >
        LinkedIn
      </a>
      {/* <br></br> */}
      <a
        href="https://github.com/mdrisco4"
        target="_blank"
        style={{
          marginLeft: "30px",
          color: `yellow`,
          backgroundColor: "blue",
          textDecoration: `none`,
          fontSize: "25px",
          border: "4px solid red",
        }}
      >
        GitHub
      </a>
    </div>
  </Layout>
)

export default IndexPage
