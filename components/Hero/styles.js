import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors, mediaQueries } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  overflow: hidden;
  object-fit: cover;
  background-image: url('images/indice.jpg');
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mediaQueries.littleDesktop} {
  height: calc(100vh - 75px);
  background-position: center center;
  }

  @media ${mediaQueries.miniDesktop} {
    margin-top: 135px;
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
  margin-top: 30px;
  height: 450px;
  width: auto;
`

export const App = styled.img`
  height: 450px;
  width: auto;
`
