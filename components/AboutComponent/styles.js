import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
  object-fit: cover;
  background-image: url('indice.png');
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Info = styled.div`
  background-color: ${colors.white};
  height: 400px;
  width: 1000px;
  padding: 30px;
`

export const Name = styled.p`
  font-size: 18px;
  text-align: justify;
`
