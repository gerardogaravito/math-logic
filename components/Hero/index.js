import React from 'react';
import * as Scroll from 'react-scroll';
import {
  Container,
  Title,
  Subtitle,
  AppContainer,
  App
} from './styles';

export const Hero = () => {
  return(
    <Scroll.Element name='home'>

      <Container>
        <Title>Juego serio para fortalecer el razonamiento lógico-matemático</Title>
        <Subtitle>Es divertido y fácil de usar</Subtitle>
        <AppContainer>
          <App src='images/app.jpg' />
        </AppContainer>
      </Container>

    </Scroll.Element>
  )
}
