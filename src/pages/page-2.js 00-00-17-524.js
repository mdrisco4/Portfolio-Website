import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">homepage</Link><br></br>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default SecondPage
