import React from 'react';
import Link from 'next/link';
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
        <Logo src='logo.png' />
      </LogoContainer>
      <NavbarOptions>

        <Link href='/'>
          <NavbarItem href=''>INICIO</NavbarItem>
        </Link>

        <Link href='/'>
          <NavbarItem href=''>APLICACIÓN</NavbarItem>
        </Link>

        <Link href='/'>
          <NavbarItem href=''>CONTACTO</NavbarItem>
        </Link>

        <Link href='/about' >
          <NavbarItem>ACERCA DE</NavbarItem>
        </Link>

        <Link href='/tesis' >
          <NavbarItem>TÉSIS</NavbarItem>
        </Link>

      </NavbarOptions>
    </Container>
  )
}
