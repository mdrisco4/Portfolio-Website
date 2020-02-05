import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
    <Layout>
    <div style={{
        display: 'grid',
        gridTemplateColumns: '450px',
        gridTemplateRows: '280px 280px 280px 280px',
        marginLeft: '320px',
        width: '600px',
        float: 'left',
        margin: '100px 0 100px 0',
        marginLeft: '20%',
        marginRight: 'auto',
        justifyContent: 'center',
      }}>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 450,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 450,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 450,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 450,
        height: 260,
      }}></img>
      {/* <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 260,
        height: 260,
      }}></img>
      <img src='' className='project-link' style={{
        border: `10px solid red`,
        width: 260,
        height: 260,
      }}></img> */}
      </div>
      </Layout>
)

export default ThirdPage