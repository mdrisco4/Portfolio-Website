import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Michael Driscoll</h1>
    <p>Welcome to my portfolio</p>
    <p>Manufacturing innovative solutions in a fast paced industry</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link><br></br>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
