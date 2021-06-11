import React from 'react'
import {
  Container,
  LogosContainer
} from './styles'

export const Footer = () => {
  return (
    <Container>
      <h1>Math-Logic</h1>
      <p>Desarrollado por:</p>
      <LogosContainer>
        <img src='app.jpg' height='250px' width='250px' />
      </LogosContainer>
    </Container>
  )
}
