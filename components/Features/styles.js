import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey_light};
`

export const Grid = styled.div`
  width: 1000px;
  height: 400px;
  margin: 30px;
  display: grid;
  grid-template-columns: 50% / 50%;
  grid-template-rows: 50% / 50%;
`

export const FirstContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin: 15px;
`

export const SecondContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: 15px;
`

export const ThirdContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 15px;
`

export const FourthContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: 15px;
`

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 15px;
`

export const Text = styled.p`
  margin-top: 15px;
  text-align: justify;
`

// export const FirstContainer = styled.div``
// export const FirstContainer = styled.div``
