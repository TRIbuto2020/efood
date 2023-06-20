import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.beigeLight};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 88px;
  row-gap: 48px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`
