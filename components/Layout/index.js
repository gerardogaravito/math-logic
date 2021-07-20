import React from 'react'
import { Container } from './styles'

import { Navbar } from 'components/Navbar'

export const Layout = ({ children }) => {
  return(
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}