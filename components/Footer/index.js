import React from 'react'
import {
  Container,
  LogosContainer
} from './styles'

export const Footer = () => {
  return (
    <Container>
      <h2>Math-Logic</h2>
      <br />
      <p>Desarrollado por:</p>
      <LogosContainer>
        <img src='FSW.png' height='250px' width='auto' />
      </LogosContainer>
    </Container>
  )
}
