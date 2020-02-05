import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
    <Layout>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <h3 style={{
        textAlign: 'center'
      }}>project-1</h3>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 450,
        height: 260,
      }}></img>
      <h3 style={{
        textAlign: 'center'
      }}
        >project-2</h3>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 450,
        height: 260,
      }}></img>
      <h3 style={{
        textAlign: 'center'
      }}>project-3</h3>
      <img src='' className='project-link' style={{
        border: `1px solid black`,
        width: 450,
        height: 260,
      }}></img>
      <h3 style={{
        textAlign: 'center'
      }}>project-4</h3>
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