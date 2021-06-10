import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey_light};
`

export const Grid = styled.div`
  width: 700px;
  height: 300px;
  background-color: red;
  display: flex;
  margin: 30px;
`
