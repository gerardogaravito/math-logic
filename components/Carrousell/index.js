import React from 'react'
import {
  Container,
  Image,
  Frame,
  Legend
} from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Carrousell = () => {
  return (
    <Container>
      <Carousel showThumbs={false}>
        <Frame>
          <Image src='test.jpg' />
          <Legend>test</Legend>
        </Frame>
        <Frame>
          <Image src='test.jpg' />
          <Legend>test</Legend>
        </Frame>
        <Frame>
          <Image src='test.jpg' />
          <Legend>test</Legend>
        </Frame>
      </Carousel>
    </Container>
  )
}
