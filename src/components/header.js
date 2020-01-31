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
        <Link
          to="/"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}
        >
          GitHub
        </Link>
        <Link
          to="/"
          style={{
            marginLeft: '30px',
            color: `white`,
            textDecoration: `none`,
            fontSize: '25px',
          }}
        >
          LinkedIn
        </Link>
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
