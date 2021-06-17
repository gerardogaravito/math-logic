import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`

export const Text = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 60px 30px;
`

export const Title = styled.h3`
  font-weight: bold;
`

export const DescText = styled.p`
  text-align: justify;
  margin-top: 30px;
`
