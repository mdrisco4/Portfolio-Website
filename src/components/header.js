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
  margin: 0;
  /* margin-bottom: 1.45rem; */
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

// const HomeLink = styled.Link`
//   margin-left: 30px;
//   color: white;
//   font-size: 25px;
// `

const GiutHubLink = styled.a`
  /* margin-left: 30px; */
  color: white;
  font-size: 45px;
`

// const ContactLink = styled.Link`
//   margin-left: 30px;
//   color: white;
//   font-size: 25px;
// `

const LinkedInLink = styled.a`
  /* margin-left: 30px; */
  color: white;
  font-size: 45px;
`

const ResumeLink = styled.a`
  /* margin-left: 30px; */
  color: white;
  font-size: 45px;
`

const Header = () => (
  <Nav>
    <LinkContainer>
      <Link to="/"
      style={{
        color: 'white',
        fontSize: '45px',
      }}>Icon</Link>
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
      <Link to="/contact/"
      style={{
        color: 'white',
        fontSize: '45px',
      }}>Contact</Link>
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
