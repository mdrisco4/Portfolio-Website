import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='me-container' style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <img src='../../photo/photo.jpg' style={{
        height: '250px',
        width: '250px',
      }}></img>
      <div className='personal-intro-container' style={{
        marginLeft: '50px',
      }}>
        <h1>Intro thing</h1>
        <p>Welcome to my portfolio</p>
        <p style={{
          // width: '250px'
        }}>Engineering innovative solutions in a fast paced industry</p>
      </div>
    </div>
    <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: '70%',
        height: 260,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}></img>
      <p style={{
        textAlign: 'center'
      }}>description 1</p>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: '70%',
        height: 260,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}></img>
      <p style={{
        textAlign: 'center'
      }}>description 1</p>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: '70%',
        height: 260,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}></img>
      <p style={{
        textAlign: 'center'
      }}>description 1</p>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: '70%',
        height: 260,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}></img>
      <p style={{
        textAlign: 'center'
      }}>description 1</p>
    <div className='footer-links' style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
    <Link to="/page-2/">Email</Link><br></br>
    <Link to="/page-3/">LinkedIn</Link><br></br>
    <Link to="/page-3/">Github</Link><br></br>
    </div>
  </Layout>
)

export default IndexPage
