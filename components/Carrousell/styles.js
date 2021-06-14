import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`

export const Frame = styled.div`
  overflow: hidden;
  height: 500px;
  object-fit: cover;
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  /* height: 400px; */
`

export const Legend = styled.p`
  color: ${colors.black};
  background-color: red;
`
