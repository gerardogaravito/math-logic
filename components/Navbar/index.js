import React from 'react';
import { 
  Container,
  LogoContainer,
  Logo,
  NavbarOptions,
  NavbarItem
} from './styles';

export const Navbar = () => {
  return(
    <Container>
      <LogoContainer>
        <Logo src='test.jpg' />
      </LogoContainer>
      <NavbarOptions>
        <NavbarItem href=''>INICIO</NavbarItem>
        <NavbarItem href=''>APLICACIÓN</NavbarItem>
        <NavbarItem href=''>CONTACTO</NavbarItem>
        <NavbarItem href=''>ACERCA DE</NavbarItem>
      </NavbarOptions>
    </Container>
  )
}
