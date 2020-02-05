import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Michael Driscoll</h1>
    {/* <h3>1125 12th St NW</h3> */}
    <h3>Washington, DC 20005</h3>
    <h3>michaelndriscoll81@gmail.com</h3>
    <h3>585-719-7720</h3>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact