import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  position: relative;
  padding: 8px;

  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  background-color: ${cores.vermelho};
  display: flex;
  position: relative;

  div {
    margin: 32px;
    margin-left: 0;
    position: relative;

    h4 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 22px;
    }

    ${Botao} {
      position: absolute;
      bottom: 0;
    }
  }
`

export const Foto = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin: 32px;
`

export const Close = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
