import React from 'react'
import {
  Container,
  LogosContainer,
  Url
} from './styles'

export const Footer = () => {
  return (
    <Container>
      <h2>Math-Logic</h2>
      <br />
      <p>Desarrollado por:</p>
      <LogosContainer>
        <Url target='_blank' href='https://gerardogaravito.vercel.app/'>Gerardo Garavito</Url>
      </LogosContainer>
    </Container>
  )
}
