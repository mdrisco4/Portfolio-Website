// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
// import * as Icons from "@fortawesome/fontawesome-free-solid"
import styled from "styled-components"
import "../styles/fonts.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const Nav = styled.div`
  background: black;
  border-top: 24px solid black;
  border-bottom: 24px solid black;
  margin: 0;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 840px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const IconLink = styled.a`
  font-family: "Monoton";
  color: white;
  font-weight: 500;
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  @media (min-width: 700px) {
    margin: none;
  }
  &:hover {
    color: rgb(110, 176, 249);
    filter:drop-shadow(1px 1px white);
  }
`

const HeaderLink = styled.a`
  font-family: "Monoton";
  color: white;
  font-weight: 500;
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-decoration: none;
  @media (min-width: 700px) {
    margin: none;
  }
  &:hover {
    color: rgb(110, 176, 249);
    text-shadow: 1px 1px white;
  }
`

const Header = () => (
  <Nav>
    <LinkContainer>
      {/* <FontAwesomeIcon
          icon={["fas", "home"]}
          size="2x"
          color="red"
        /> */}

      {/* <FontAwesomeIcon
          icon={["fab", "centos"]}
          size="2x"
          color="red"
        /> */}

      <IconLink href="/">
        <FontAwesomeIcon icon={["fas", "atom"]} size="3x" />
      </IconLink>

      {/* <HeaderLink href="/">Home</HeaderLink> */}
      <HeaderLink href="https://github.com/mdrisco4" target="_blank">
        GitHub
      </HeaderLink>
      <HeaderLink
        href="https://www.linkedin.com/in/michael-n-driscoll/"
        target="_blank"
      >
        LinkedIn
      </HeaderLink>
      <HeaderLink href="/resume/">Resume</HeaderLink>
      <HeaderLink href="/contact/">Contact</HeaderLink>
      <HeaderLink href="/about/">About</HeaderLink>
    </LinkContainer>
  </Nav>
)

export default Header
