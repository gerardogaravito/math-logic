import React from 'react'
import {
  Container,
  ImageContainer,
  Info,
  SeePdf
} from './styles'

export const TesisPdf = () => {
  return (
    <Container>
      <ImageContainer>
        <img src='pdf.png' width='100px' height='125px' />
      </ImageContainer>
      <Info>
        <p>Texto</p>
        <p>224 páginas</p>
        <SeePdf href='tesis.pdf' target='_blank'>Download | Vista previa</SeePdf>
      </Info>
    </Container>
  )
}
