import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  color: ${cores.vermelho};
  padding: 64px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .texto {
    font-size: 18px;
    font-weight: bold;
  }
`

export const Retorno = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelho};
`
