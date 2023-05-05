import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  position: relative;
  padding: 8px;

  img {
    width: 100%;
  }
`
export const Box = styled.div`
  position: relative;
  border-top: none;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin: 8px 0;
  letter-spacing: 0.5px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Botao = styled.button`
  background-color: ${cores.bege};
  border: none;
  width: 100%;
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  cursor: pointer;
  padding: 4px 0;
`
