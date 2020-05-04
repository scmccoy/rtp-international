import React from 'react'
import { Link } from 'gatsby'
import Address from '../components/address'
import Email from '../components/email'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <h1>Contact R.T.P. Headquarters</h1>
    <Address />
    <Email />
  </Layout>
)

export default Contact
