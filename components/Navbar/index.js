import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as Scroll from 'react-scroll';
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
      <Link href='/'>
        <LogoContainer>
          <Logo src='images/logo.png' />
        </LogoContainer>
      </Link>
      <NavbarOptions>

        <Link href='/'>
        <Scroll.Link 
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-75}
          >
          <NavbarItem href=''>INICIO</NavbarItem>
          </Scroll.Link>
        </Link>

        <Link href='/'>
          <Scroll.Link 
            to="playstore"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
          <NavbarItem href=''>APLICACIÓN</NavbarItem>
          </Scroll.Link>
        </Link>

        <Link href='/'>
          <Scroll.Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
          <NavbarItem href=''>CONTACTO</NavbarItem>
          </Scroll.Link>
        </Link>

        <Link href='/about' >
          <NavbarItem>ACERCA DE</NavbarItem>
        </Link>

        <Link href='/tesis' >
          <NavbarItem>TESIS</NavbarItem>
        </Link>

        <Link href='/aviso' >
          <NavbarItem>POLÍTICA DE PRIVACIDAD</NavbarItem>
        </Link>

      </NavbarOptions>
    </Container>
  )
}
