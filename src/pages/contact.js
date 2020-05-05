import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Address from '../components/address'
import Email from '../components/email'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <h1>Contact R.T.P. Headquarters</h1>
    <Address />
    <Title>Send all digital content to: </Title>
    <Email />
  </Layout>
)
const Title = styled.p`
  font-size: 2rem;
`
export default Contact
