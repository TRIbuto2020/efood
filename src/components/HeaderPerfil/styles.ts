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

    @media (max-width: 760px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 12px;

      img {
        width: 100%;
      }

      .texto {
        font-size: 14px;
      }
    }
  }

  .texto {
    font-size: 18px;
    font-weight: bold;
  }

  a {
    cursor: pointer;
  }
`

export const Retorno = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelho};
`
