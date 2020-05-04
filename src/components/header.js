import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderTextWrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Description>cassettes, demos and shirts</Description>
    </HeaderTextWrapper>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  background: #fff;
  margin-bottom: 1.45rem;
`

const HeaderTextWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Description = styled.p`
  color: #000;
  margin-bottom: -1rem;
  font-size: 1.4rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
