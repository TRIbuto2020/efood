import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.beige};
  font-size: 12px;
  font-weight: normal;
  padding: 6px 4px;
  display: inline-block;
`
