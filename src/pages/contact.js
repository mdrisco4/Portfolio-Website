import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="comtainer"
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        width: '100%'
    }}>
    <img src="" style={{
        height: '250px',
        width: '50%',
        marginRight: '8%',
        border: '1px solid red'
    }}/>
    <div className="contact-info" style={{
      height: '250px',
        width: '50%',
        marginLeftt: '8%',
        border: '1px solid blue'
    }}>
      <h1>Michael Driscoll</h1>
      {/* <h3>1125 12th St NW</h3> */}
      <h3>Washington, DC 20005</h3>
      <h3>michaelndriscoll81@gmail.com</h3>
      <h3>585-719-7720</h3>
    </div>
    </div>
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
          border: "1px solid black",
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
          border: "1px solid black",
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
          border: "1px solid black",
        }}
      >
        GitHub
      </a>
      {/* <br></br> */}
    </div>
    <Link to="/">Go back to the homepage  KEEP OR DROP??</Link>
  </Layout>
)

export default Contact
