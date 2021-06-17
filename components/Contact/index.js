import React from 'react'
import * as Scroll from 'react-scroll';

import {
  Container,
  Title,
  Email,
  Text,
  Button
} from './styles'

export const Contact = () => {
  return (
    <Scroll.Element name='contact'>

      <Container>
        <Title>Contáctanos</Title>
        <Email
         placeholder='Correo electrónico'
         type='email'
        />
        <Text 
          placeholder='Comentario'
          type='text'
        />
        <Button type='submit'>Enviar</Button>
      </Container>

    </Scroll.Element>
  )
}
