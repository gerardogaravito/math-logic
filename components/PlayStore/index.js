import React from 'react';
import * as Scroll from 'react-scroll';
import {
  Container,
  Instruction,
  ImageContainer,
  Android
} from './styles';

export const PlayStore = () => {
  return(
    <Scroll.Element name='playstore'>

      <Container >
        <Instruction>Haz click en ícono para descargar</Instruction>
        <ImageContainer target='_blank' href='https://play.google.com/store/apps/details?id=com.jarworks.mathlogic'>
          <img src={'androidLogo.png'} width='200px' height='200px' alt='PlayStore link for download'/>
        </ImageContainer>
        <Android>Android</Android>
      </Container>
      
    </Scroll.Element>
  )
}
