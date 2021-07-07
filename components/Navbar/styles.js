import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors, mediaQueries } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 10;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};

  @media ${mediaQueries.miniDesktop} {
    flex-direction: column;
    height: auto;
    justify-content: center;
  }
`

export const LogoContainer = styled.div`
  overflow: hidden;
  object-fit: cover;
  width: 150px;
  height: 60px;
  margin: 10px;
  background-color: ${colors.main};

  @media ${mediaQueries.miniDesktop} {
    margin: 10px 10px 0px 10px;
  }
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

  @media ${mediaQueries.miniDesktop} {
    flex-wrap: wrap;
  }
`

export const NavbarItem = styled.p`
  margin: 5px;
  padding: 10px 5px;
  font-weight: bold;
  max-height: 45px;
  text-decoration: none;
  color: ${colors.black};

  &:hover {
    cursor: pointer;
    ${blackToMain}
  }

  @media ${mediaQueries.miniDesktop} {
    margin: 5px 5px;
    padding: 5px 5px;
    font-size: 14px;
    line-height: 12px;
  }
`
