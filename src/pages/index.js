import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const IndexPage = () => (
  <Layout>
    <div
      className="me-container"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <img
        src='../images.gatsby-icon.png'
        style={{
          height: "250px",
          width: "45%",
          border: "1px solid red",
        }}
      ></img>
      <div
        className="personal-intro-container"
        style={{
          border: "1px solid blue",
          height: "250px",
          width: "45%",
          marginLeft: "5%",
          padding: "5px"
        }}
      >
        <h1>Michael Driscoll</h1>
        <p>Engineering innovative solutions in a fast paced industry</p>
        <p>I am a software engineer...</p>
      </div>
    </div>
    <img
      src=""
      alt='ther'
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: '50px',
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
    <a
      href="/portfolio/"
      style={{
        marginLeft: "30px",
        color: `black`,
        textDecoration: `none`,
        fontSize: "25px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginBottom: "40px",
        width: "20%",
        height: "60px",
        border: "4px solid black",
        borderRadius: "15px"
      }}
    >
      <Link to="/modern-trousseau">Learn More</Link>
    </a>
    <img
      src=""
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: '50px',
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
    <a
      href="/portfolio/"
      style={{
        marginLeft: "30px",
        color: `black`,
        textDecoration: `none`,
        fontSize: "25px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginBottom: "40px",
        width: "20%",
        height: "60px",
        border: "4px solid black",
        borderRadius: "15px"
      }}
    >
      <Link to="/national-parks">Learn More</Link>
    </a>
    <img
      src=""
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: '50px',
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
    <a
      href="/portfolio/"
      style={{
        marginLeft: "30px",
        color: `black`,
        textDecoration: `none`,
        fontSize: "25px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginBottom: "40px",
        width: "20%",
        height: "60px",
        border: "4px solid black",
        borderRadius: "15px"
        
      }}
    >
      <Link to="/mern-full-stack">Learn More</Link>
    </a>
    <img
      src=""
      className="project-link"
      style={{
        border: `10px solid black`,
        borderRadius: '50px',
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
    <a
      href="/portfolio/"
      style={{
        marginLeft: "30px",
        color: `black`,
        textDecoration: `none`,
        fontSize: "25px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginBottom: "40px",
        width: "20%",
        height: "60px",
        border: "4px solid black",
        borderRadius: "15px"
      }}
    >
      <Link to="/trivia-game">Learn More</Link>
    </a>
    <div
      className="footer-links"
      style={{
        display: "flex",
        justifyContent: 'center',
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
          backgroundColor: 'blue',
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
          backgroundColor: 'blue',
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
          backgroundColor: 'blue',
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
