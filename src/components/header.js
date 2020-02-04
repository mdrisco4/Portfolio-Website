import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Michael Driscoll
        </Link>
        <a href="/page-3/"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}>Portfolio</a>
        <a href="https://github.com/mdrisco4"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}>GitHub</a>
        <a href="https://www.linkedin.com/in/michael-n-driscoll/"
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
