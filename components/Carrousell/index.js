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
          <Image src='carrousell/1.jpg' />
        </Frame>
        <Frame>
          <Image src='carrousell/2.jpg' />
        </Frame>
        <Frame>
          <Image src='carrousell/3.jpg' />
        </Frame>
        <Frame>
          <Image src='carrousell/4.jpg' />
        </Frame>
        <Frame>
          <Image src='carrousell/5.jpg' />
        </Frame>
        <Frame>
          <Image src='carrousell/6.jpg' />
        </Frame>
        <Frame>
          <Image src='carrousell/7.jpg' />
        </Frame>
        <Frame>
          <Image src='carrousell/8.jpg' />
        </Frame>
      </Carousel>
    </Container>
  )
}
