import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors, mediaQueries } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey_light};

  @media ${mediaQueries.tablet} {
    height: 1200px;
  }
`

export const Grid = styled.div`
  width: 1000px;
  height: auto;
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media ${mediaQueries.tablet} {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: auto;
  }
`

export const FirstContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin: 15px;

  @media ${mediaQueries.tablet} {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

export const SecondContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: 15px;

  @media ${mediaQueries.tablet} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`

export const ThirdContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 15px;

  @media ${mediaQueries.tablet} {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`

export const FourthContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: 15px;

  @media ${mediaQueries.tablet} {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
`

export const ImageContainer = styled.div`
  width: auto;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 15px;
`

export const Text = styled.p`
  margin-top: 15px;
  text-align: justify;

  @media ${mediaQueries.tablet} {
    text-align: left;
  }
`
