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
          <Image src='images/carrousell/1.jpg' />
        </Frame>
        <Frame>
          <Image src='images/carrousell/2.jpg' />
        </Frame>
        <Frame>
          <Image src='images/carrousell/3.jpg' />
        </Frame>
        <Frame>
          <Image src='images/carrousell/4.jpg' />
        </Frame>
        <Frame>
          <Image src='images/carrousell/5.jpg' />
        </Frame>
        <Frame>
          <Image src='images/carrousell/6.jpg' />
        </Frame>
        <Frame>
          <Image src='images/carrousell/7.jpg' />
        </Frame>
        <Frame>
          <Image src='images/carrousell/8.jpg' />
        </Frame>
      </Carousel>
    </Container>
  )
}
