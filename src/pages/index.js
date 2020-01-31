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
      flexDirection: 'column',
    }}>
      <img src='../../photo/photo.jpg' style={{
        height: '250px',
        width: '250px',
      }}></img>
      <div className='personal-intro-container'>
        <h1>Intro thing</h1>
        <p>Welcome to my portfolio</p>
        <p style={{
          width: '250px'
        }}>Engineering innovative solutions in a fast paced industry</p>
      </div>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 280px',
        gridTemplateRows: '280px 280px 280px',
        marginLeft: '320px'
      }}>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `10px solid red`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `10px solid red`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 260,
        height: 260,
      }}></img>
      {/* <img src='' className='project-link' style={{
        border: `10px solid red`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 260,
        height: 260,
      }}></img> */}
      </div>
      {/* <Image /> */}
    </div>
    <Link to="/page-2/">Go to page 2</Link><br></br>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
