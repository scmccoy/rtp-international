import React from 'react'
import styled from 'styled-components'

const Address = () => (
  <Container>
    <Title>Send all demos, cassettes, records and other items to: </Title>
    <AddressText id="address">
      R.T.P. international <br />
      P.O. Box 12622 <br />
      Portland, OR 97212
    </AddressText>
  </Container>
)

const Container = styled.div`
  position: relative;
`

const Title = styled.p`
  font-size: 2rem;
`

const AddressText = styled.p`
  border: 2px solid #fff;
  max-width: 250px;
  padding: 1em;
  font-weight: bold;
  font-size: 1.6rem;
`

export default Address
