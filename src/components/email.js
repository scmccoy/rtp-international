import React from 'react'
import styled from 'styled-components'

const Email = () => (
  <Container>
    <EmailLink id="email">
      <a href="email:contact@rtp-records.com">contact@rtp-records.com</a>
    </EmailLink>
  </Container>
)

const Container = styled.div`
  position: relative;
`

const EmailLink = styled.p`
  border: 2px solid #fff;
  max-width: 250px;
  padding: 1em;
  font-weight: bold;
  font-size: 1.6rem;
`

export default Email
