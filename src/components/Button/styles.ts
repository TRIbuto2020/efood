import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
`
