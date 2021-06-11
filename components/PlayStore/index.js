import React from 'react';
import {
  Container,
  Instruction,
  ImageContainer,
  Android
} from './styles';

export const PlayStore = () => {
  return(
    <Container>
      <Instruction>Haz click en ícono para descargar</Instruction>
      <ImageContainer href=''>
        <img src={'app.jpg'} width='200px' height='200px' alt='PlayStore link for download'/>
      </ImageContainer>
      <Android>Android</Android>
    </Container>
  )
}
