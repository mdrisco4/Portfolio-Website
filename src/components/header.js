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

const Nav = styled.div`
  background: rgb(99, 95, 85);
  border-top: 12px solid rgb(99, 95, 85);
  border-bottom: 12px solid rgb(99, 95, 85);
  margin: 0;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const HomeLink = styled.a`
  color: rgb(51, 61, 74);
  text-shadow: 4px 2px orange;
  font-size: 35px;
  margin-left: auto;
  margin-right: auto; 
  @media (min-width: 700px) {
    margin: none;
  }
`

const GiutHubLink = styled.a`
  color: rgb(51, 61, 74);
  text-shadow: 4px 2px orange;
  font-size: 35px;
  margin-left: auto;
  margin-right: auto; 
  @media (min-width: 700px) {
    margin: none;
  }
`

const ContactLink = styled.a`
  color: rgb(51, 61, 74);
  text-shadow: 4px 2px orange;
  font-size: 35px;
  margin-left: auto;
  margin-right: auto; 
  @media (min-width: 700px) {
    margin: none;
  }
`

const LinkedInLink = styled.a`
  color: rgb(51, 61, 74);
  text-shadow: 4px 2px orange;
  font-size: 35px;
  margin-left: auto;
  margin-right: auto; 
  @media (min-width: 700px) {
    margin: none;
  }
`

const ResumeLink = styled.a`
  color: rgb(51, 61, 74);
  text-shadow: 4px 2px orange;
  font-size: 35px;
  margin-left: auto;
  margin-right: auto; 
  @media (min-width: 700px) {
    margin: none;
  }
`

const Header = () => (
  <Nav>
    <LinkContainer>
      <HomeLink href="/">Home</HomeLink>
      {/* <i class="fas fa-home"
      style={{
        color: 'black',
      }}></i> */}

      {/* <FontAwesomeIcon icon="fas fa-home" size="2x" 
        style={{
          color: 'black',
        }}/> */}

      <GiutHubLink href="https://github.com/mdrisco4" target="_blank">
        GitHub
      </GiutHubLink>
      <LinkedInLink
        href="https://www.linkedin.com/in/michael-n-driscoll/"
        target="_blank"
      >
        LinkedIn
      </LinkedInLink>
      <ContactLink href="/contact/">Contact</ContactLink>
      <ResumeLink
        href="https://docs.google.com/document/d/15n_m-9ER3o23y1RhjFuyHTowF-MjG-ltaSybQ8QR_Ak/edit"
        target="_blank"
      >
        Resume
      </ResumeLink>
    </LinkContainer>
  </Nav>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
