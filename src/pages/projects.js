import React from "react"
import "../styles/fonts.css"
// import Layout from "../components/layout"
import styled from "styled-components"

import Layout from "../components/layout"

const ProjectTitle = styled.div`
    /* color: white; */
    color: rgb(137, 146, 173);
    font-size: 55px; 
`

const Projects = () => (
    <Layout>
    <ProjectTitle>Hello New Page</ProjectTitle>

    <ProjectTitle>New Text Here</ProjectTitle>
      {/* <Link to="/">Go back to the homepage  KEEP OR DROP??</Link> */}
      </Layout>
)

export default Projects