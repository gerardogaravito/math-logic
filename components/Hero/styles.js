import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors, mediaQueries } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh + 100px);
  overflow: hidden;
  object-fit: cover;
  background-image: url('indice.png');
  background-position: bottom center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mediaQueries.littleDesktop} {
  height: calc(100vh - 75px);
  background-position: center center;
  }
`

export const Title = styled.h2`
  margin: 30px 15px 0px 15px;
  color: ${colors.third};
  text-align: center;
`

export const Subtitle = styled.h3`
  margin: 15px 15px 0px 15px;
  color: ${colors.third};
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
