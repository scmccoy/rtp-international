import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navigation = () => (
  <Wrapper>
    <LinkTo>
      <Link to="/contact/">Contact</Link>
    </LinkTo>
    <LinkTo>
      <Link to="/order/">Order</Link>
    </LinkTo>
  </Wrapper>
)

const Wrapper = styled.div`
  background: #000;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
const LinkTo = styled.div`
  font-size: 2rem;
  padding: 0 1rem;
`

export default Navigation
