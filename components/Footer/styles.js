import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: 50px 0px;
`

export const LogosContainer = styled.div`
  width: auto;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  overflow: hidden;
  object-fit: cover;
`

export const Url = styled.a`
  text-decoration: none;
  color: ${colors.black};
  font-size: 18px;

  &:hover {
    ${blackToMain}
  }
`
