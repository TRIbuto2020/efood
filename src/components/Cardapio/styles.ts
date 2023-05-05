import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  background-color: ${cores.begeClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`
