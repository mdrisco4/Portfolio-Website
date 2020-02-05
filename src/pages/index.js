import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Photo from "../../photo"
import SEO from "../components/seo"
// import photo from "../../photo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="me-container"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <img
        src="../../photo/photo.jpg"
        style={{
          height: "250px",
          width: "250px",
        }}
      ></img>
      <div
        className="personal-intro-container"
        style={{
          marginLeft: "50px",
        }}
      >
        <h1>Michael Driscoll</h1>
        <p>Engineering innovative solutions in a fast paced industry</p>
        <p>I am a software engineer...</p>
      </div>
    </div>
    <img
      src=""
      className="project-link"
      style={{
        border: `1px solid black`,
        width: "70%",
        height: 260,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></img>
    <p
      className="project-1-title"
      style={{
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: '32px',
      }}
    >
      Modern Troussaeu
    </p>
    <p
      className="project-1-description"
      style={{
        // textAlign: 'center',
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
        height: "40px",
        border: "2px solid black",
      }}
    >
      Learn More
    </a>
    <img
      src=""
      className="project-link"
      style={{
        border: `1px solid black`,
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
        fontWeight: 'bold',
        fontSize: '32px',
      }}
    >
      National Parks Website
    </p>
    <p
    className="project-1-description"
    style={{
      // textAlign: 'center',
      width: "70%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    }}>This is an interactive site that I built with API fetches that provides users 
      links to pages with detailed descriptions of dozens of National Parks around the country
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
        height: "40px",
        border: "2px solid black",
      }}
    >
      Learn More
    </a>
    <img
      src=""
      className="project-link"
      style={{
        border: `1px solid black`,
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
        fontWeight: 'bold',
        fontSize: '32px',
      }}
    >
      MERN Full Stack App
    </p>
    <p className="project-1-description"
      style={{
        // textAlign: 'center',
        width: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}>This is a full stack application that I built with an API I deployed and a 
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
        height: "40px",
        border: "2px solid black",
      }}
    >
      Learn More
    </a>
    <img
      src=""
      className="project-link"
      style={{
        border: `1px solid black`,
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
        fontWeight: 'bold',
        fontSize: '32px',
      }}
    >
      Trivia Game
    </p>
    <p className="project-1-description"
      style={{
        // textAlign: 'center',
        width: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}>This is an interactive game that I built using basic HTML, CSS and Javascript
      that allows the users to enjoy a fun trivia game with a variety of topics
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
        height: "40px",
        border: "2px solid black",
      }}
    >
      Learn More
    </a>
    <div
      className="footer-links"
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Link to="/page-2/">Add link to email</Link>
      <br></br>
      <a href="https://www.linkedin.com/in/michael-n-driscoll/"
          style={{
            marginLeft: '30px',
            color: `black`,
            textDecoration: `none`,
            fontSize: '25px',
            border: '1px solid black',
          }}>LinkedIn</a>
      <br></br>
      <a href="https://github.com/mdrisco4"
          style={{
            marginLeft: '30px',
            color: `black`,
            textDecoration: `none`,
            fontSize: '25px',
            border: '1px solid black',
          }}>GitHub</a>
      <br></br>
    </div>
  </Layout>
)

export default IndexPage
