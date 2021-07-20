import styled from 'styled-components';
import { blackToMain, blackToWhite } from 'globalStyles/animations';
import { colors, mediaQueries } from 'globalStyles/stylesVariables';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.main};
`

export const Title = styled.h1`
  color: ${colors.white};
  margin: 60px 15px 15px 15px;
`

export const Form = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const Sections = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;

  @media ${mediaQueries.miniDesktop} {
    width: 400px;
  }

  @media ${mediaQueries.mobile} {
    width: 300px;
  }
`

export const Email = styled.input`
  width: 800px;
  max-width: 800px;
  margin: 30px 15px;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;

  @media ${mediaQueries.miniDesktop} {
    width: 400px;
  }

  @media ${mediaQueries.mobile} {
    width: 300px;
  }
`

export const Label = styled.label`
  display: none;
`

export const Text = styled.textarea`
  width: 800px;
  max-width: 800px;
  height: 300px;
  margin: 5px 15px 30px 15px;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;

  @media ${mediaQueries.miniDesktop} {
    width: 400px;
  }

  @media ${mediaQueries.mobile} {
    width: 300px;
  }
`

export const Button = styled.button`
  background-color: ${colors.main_light};
  margin: 5px 15px 60px 15px;
  padding: 15px 30px;
  border-radius: 3px;
  color: ${colors.black};
  font-size: 24px;

  &:hover {
    ${blackToWhite}
    cursor: pointer;
  }
`

export const Message = styled.div`
  color: ${colors.white}
`
