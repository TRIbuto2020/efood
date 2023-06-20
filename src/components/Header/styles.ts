import styled from 'styled-components'
import { colors } from '../../styles'
import bg from '../../assets/images/bg.png'

export const HeaderDiv = styled.header`
  background-image: 'url(${bg})';
  background-size: cover;
  color: ${colors.red};
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    margin-top: 40px;
  }

  p {
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    margin-top: 140px;
    margin-bottom: 40px;
    max-width: 540px;
    width: 80%;
    text-align: center;

    @media (max-width: 424px) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  a {
    color: ${colors.beige};
    background-color: ${colors.red};
    padding: 8px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      height: 16px;
      display: inline;
      margin-top: 0;
    }
  }
`
