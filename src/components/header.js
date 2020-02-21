import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas, far)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `blue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // display: 'flex'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            // display: 'flex'
          }}
        >
          Icon
        </Link>
          <FontAwesomeIcon icon="fas fa-home" size = '2x'/>
        <a href="/portfolio/"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}>Portfolio Remove?</a>
        <a href="https://github.com/mdrisco4"
          target="_blank"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}>GitHub</a>
        <a href="https://www.linkedin.com/in/michael-n-driscoll/"
          target="_blank"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}>LinkedIn</a>
        <Link
          to="/contact/"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}
          >
          Contact
        </Link>
        <a href="https://docs.google.com/document/d/15n_m-9ER3o23y1RhjFuyHTowF-MjG-ltaSybQ8QR_Ak/edit"
          target="_blank"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}>Resume</a>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
