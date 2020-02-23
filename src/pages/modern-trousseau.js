import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ModernTrousseau = () => (
  <Layout>
    <div className="container"
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        width: '100%'
    }}>
    <p>Modern Trousseau</p>
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
      {/* <br></br> */}
    </div>
    <Link to="/">Go back to the homepage  KEEP OR DROP??</Link>
  </Layout>
)

export default ModernTrousseau