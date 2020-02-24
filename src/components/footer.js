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


const FooterLink = styled.a`
    color: black;
    text-shadow: 2px 2px 5px red;
    background-color: rgb(99, 95, 85);
    text-decoration: none;
    font-size: 25px;
    border: 4px solid darkblue;
    border-radius: 8px;
    padding: 4px;
    &:hover {
    /* border: 4px solid yellow; */
    color: rgb(110, 176, 249);
    background-color: darkblue;
  }
`

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
      <FooterLink
        href="mailto:michaelndriscoll81@gmail.com"
        target="_blank"
      >
        Email
      </FooterLink>
      {/* <br></br> */}
      <FooterLink
        href="https://www.linkedin.com/in/michael-n-driscoll/"
        target="_blank"
      >
        LinkedIn
      </FooterLink>
      {/* <br></br> */}
      <FooterLink
        href="https://github.com/mdrisco4"
        target="_blank"
      >
        GitHub
      </FooterLink>
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