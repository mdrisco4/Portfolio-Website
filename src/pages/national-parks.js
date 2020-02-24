import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NationalParks = () => (
  <Layout>
    <div className="container"
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        width: '100%'
    }}>
    <p>National Parks</p>
    </div>
  </Layout>
)

export default NationalParks