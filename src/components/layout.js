import React from "react"
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
      <body
        title={"Michael Driscoll"}
        style={{
          margin: "0",
        }}
      >
        <div
          style={{
            margin: `0`,
            backgroundColor: "rgb(12, 24, 45)",
            border: "5px solid rgb(12, 24, 45)",
            minHeight: "750px",
          }}
        >
          <main>{children}</main>
        </div>
      </body>
    </>
  )
}

export default Layout
