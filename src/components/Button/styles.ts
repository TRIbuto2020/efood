import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
`
