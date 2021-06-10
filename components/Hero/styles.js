import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
  object-fit: cover;
  background-image: url('test.jpg');
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  margin-top: 50px;
  color: ${colors.third}
`

export const Subtitle = styled.h3`
  margin-top: 15px;
  color: ${colors.third}
`

export const AppContainer = styled.div`
  overflow: hidden;
  object-fit: cover;
  margin-top: 50px;
  height: 400px;
  width: 250px;
`

export const App = styled.img`
  height: 400px;
  width: 250px;
`
