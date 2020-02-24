import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
      <div
        style={{
          margin: `0`,
          backgroundColor: 'rgb(90, 176, 255)',
          border: '5px solid rgb(90, 176, 255)'
        }}
      >
        <main>{children}</main>
        <footer>
          MAYBE PUT COMETHING HERE
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
