import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `90vw`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link style={{ color: `white`, textDecoration: `none` }} to="/">
        Lucas da Silva
      </Link>
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
