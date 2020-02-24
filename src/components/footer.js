import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const Footer = () => (
    <>
<div
      className="footer-links"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <a
        href="https://github.com/mdrisco4"
        target="_blank"
        style={{
        color: "black",
        textShadow: "2px 2px 5px red",
        backgroundColor: "rgb(99, 95, 85)",
          textDecoration: `none`,
          fontSize: "25px",
          border: "4px solid darkblue",
          borderRadius: "8px",
          padding: "4px"
        }}
      >
        Email
      </a>
      {/* <br></br> */}
      <a
        href="https://www.linkedin.com/in/michael-n-driscoll/"
        target="_blank"
        style={{
            color: "black",
            textShadow: "2px 2px 5px red",
            backgroundColor: "rgb(99, 95, 85)",
          textDecoration: `none`,
          fontSize: "25px",
          border: "4px solid darkblue",
          borderRadius: "8px",
          padding: "4px"
        }}
      >
        LinkedIn
      </a>
      {/* <br></br> */}
      <a
        href="https://github.com/mdrisco4"
        target="_blank"
        style={{
            color: "black",
            textShadow: "2px 2px 5px red",
            backgroundColor: "rgb(99, 95, 85)",
          textDecoration: `none`,
          fontSize: "25px",
          border: "4px solid darkblue",
          borderRadius: "8px",
          padding: "4px"
        }}
      >
        GitHub
      </a>
      </div>
    </>
  )
  
  // Header.propTypes = {
  //   siteTitle: PropTypes.string,
  // }
  
  // Header.defaultProps = {
  //   siteTitle: ``,
  // }
  
  export default Footer