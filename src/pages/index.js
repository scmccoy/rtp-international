import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import CassetteLayout from '../components/cassette-layout'
import ImagePunkTurtle from '../components/image-punk-turtle'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageWrapper>
      <ImagePunkTurtle />
    </ImageWrapper>
    <CassetteLayout />
  </Layout>
)

const ImageWrapper = styled.div`
  max-width: 1000px;
  margin-bottom: 1.45rem;
`

export default IndexPage
