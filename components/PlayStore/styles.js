import styled from 'styled-components';
import { blackToMain } from 'globalStyles/animations';
import { colors } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey_light};
`
export const Instruction = styled.h3`
  margin-bottom: 15px;
`

export const ImageContainer = styled.a`
  height: 200px;
  width: 200px;
  object-fit: cover;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

export const Android = styled.p`
  margin-top: 15px;
`
