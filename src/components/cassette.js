import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImgCover from './image/destripados/cover'
import ImgTape from './image/destripados/tape'

const Cassette = ({ title }) => (
  <Container>
    <TitleWrapper>
      <Title>{title}</Title>
      <Description>
        Destripados play high energy Discharge / Chaos U.K. influenced
        Scandinavian hardcore punk. Like a high speed totalitar meets
        skitslickers, super raw and aggressive from start to finish. Manic
        guitars and machine gun drums coupled with Psychotic Screaming with the
        spanish lyrics giving it a heavy 80’s south American feel. (think R.D.P.
        or Lobotomia) Gutless is 8 tracks of raw energy!
      </Description>
      <Price>$3.00 usd</Price>
    </TitleWrapper>
    <ImageWrapper>
      <ImageCoverWrapper>
        <ImgCover />
      </ImageCoverWrapper>
      <ImageTapeWrapper>
        <ImgTape />
      </ImageTapeWrapper>
    </ImageWrapper>
  </Container>
)

const Container = styled.div`
  display: flex;
  height: 100%;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
`
const Title = styled.p`
  font-size: 2rem;
`
const Description = styled.p`
  font-size: 1.4rem;
`
const Price = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`
const ImageCoverWrapper = styled.div`
  display: flex;
  width: 20rem;
  position: relative;
`
const ImageTapeWrapper = styled.div`
  display: flex;
  position: relative;
  width: 30rem;
  height: 100%;
`
Cassette.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Cassette
