import React from "react"
// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
// import { ThemeProvider } from "styled-components"

import Header from "./header"
// import Footer from "./footer"
// import "../styles/normalize.css"

// import GlobalStyle from "./GlobalStyle"
// import variables from "../styles/styled-components"
// import "../styles/fonts.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <body
        style={{
          margin: "0",
        }}
      >
        <div
          style={{
            margin: `0`,
            backgroundColor: "rgb(90, 176, 255)",
            border: "5px solid rgb(90, 176, 255)",
            minHeight: "1200px",
          }}
        >
          <main>{children}</main>
        </div>
      </body>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
