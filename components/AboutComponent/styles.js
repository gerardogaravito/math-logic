import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 75px);
  overflow: auto;
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
  height: auto;
  max-width: 1000px;
  padding: 30px;
  margin: 50px 15px;
`

export const Name = styled.p`
  font-size: 18px;
  text-align: justify;
`
