import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Photo from "../../photo"
import SEO from "../components/seo"

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
      }}
    >
      description 1
    </p>
    <p></p>
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
      }}
    >
      description 1
    </p>
    <p></p>
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
      }}
    >
      description 1
    </p>
    <p></p>
    <div
      className="footer-links"
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Link to="/page-2/">Email</Link>
      <br></br>
      <Link to="/page-3/">LinkedIn</Link>
      <br></br>
      <Link to="/page-3/">Github</Link>
      <br></br>
    </div>
  </Layout>
)

export default IndexPage
