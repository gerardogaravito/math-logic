import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 10;
  text-align: center;
  justify-content: space-between;
  background-color: ${colors.white};
`

export const LogoContainer = styled.div`
  overflow: hidden;
  object-fit: cover;
  width: 150px;
  height: 60px;
  margin: 10px;
  background-color: ${colors.main};
`

export const Logo = styled.img`
  width: 150px;
  height: 60px;

`

export const NavbarOptions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`

export const NavbarItem = styled.p`
  margin: 25px;
  padding: 15px 15px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.black};
  background-color: 'red';

  &:hover {
    cursor: pointer;
    ${blackToMain}
  }
`
