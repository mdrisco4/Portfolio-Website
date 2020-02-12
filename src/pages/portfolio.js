import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
    <Layout>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <h3 style={{
        textAlign: 'center'
      }}>project-1 - Links to separate project pages on text and image</h3>
      <img src='' className='project-link' style={{
        border: `8px solid black`,
        borderRadius: '50px',
        width: '100%',
        height: 260,
      }}></img>
      <h3 style={{
        textAlign: 'center'
      }}
        >project-2 - Links to separate project pages on text and image</h3>
      <img src='' className='project-link' style={{
        border: `8px solid black`,
        borderRadius: '50px',
        width: '100%',
        height: 260,
      }}></img>
      <h3 style={{
        textAlign: 'center'
      }}>project-3 - Links to separate project pages on text and image</h3>
      <img src='' className='project-link' style={{
        border: `8px solid black`,
        borderRadius: '50px',
        width: '100%',
        height: 260,
      }}></img>
      <h3 style={{
        textAlign: 'center'
      }}>project-4 - Links to separate project pages on text and image</h3>
      <img src='' className='project-link' style={{
        border: `8px solid black`,
        borderRadius: '50px',
        width: '100%',
        height: 260,
      }}></img>
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

export default ThirdPage