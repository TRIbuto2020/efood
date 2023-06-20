import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.red};
  border: 1px solid ${colors.red};
  position: relative;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: top;
  }
`
export const Box = styled.div`
  position: relative;
  border-top: none;
  padding: 8px;
  padding-bottom: 14px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  img {
    height: 20px;
    margin-left: 8px;
  }
`

export const Tags = styled.div`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
  gap: 8px;
  text-transform: capitalize;
`
