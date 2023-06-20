import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  margin-top: 40px;
  margin-bottom: 32px;
`
export const Redes = styled.ul`
  display: flex;

  li {
    margin-right: 8px;

    img {
      width: 24px;
    }
  }
`
export const Text = styled.p`
  color: ${colors.red};
  margin-top: 80px;
  margin-bottom: 40px;
  width: 480px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  max-width: 90%;
`
