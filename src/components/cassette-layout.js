import React from 'react'
import styled from 'styled-components'
import Cassette from './cassette'
import Divider from './divider'

const CassetteLayout = () => (
  <Container>
    <Title>Now available</Title>
    <Cassette title="Destripados - Gutless" />
    <Divider />
  </Container>
)

const Container = styled.div`
  position: relative;
`
const Title = styled.h2`
  color: #fff;
`

export default CassetteLayout
