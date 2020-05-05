import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Address from '../components/address'
import Email from '../components/email'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="order punk rock tapes cassettes" />
    <h1>Order</h1>
    <Info>
      Send me an email with what you want and your address and i'll invoice you
      (preferred PayPal). Let me know if you need to use another payment method.
    </Info>
    <Info>I'll try to get shipping as exact as possible.</Info>
    <Info>All orders charged $1 for mailer. </Info>
    <Info>When payment is received i'll ship and send you tracking #</Info>
    <Email />
  </Layout>
)

const Info = styled.p`
  font-size: 1.4rem;
`

export default Contact
