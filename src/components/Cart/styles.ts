import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.bege};
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${cores.bege};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 6px;
  }

  h3 {
    font-size: 18px;
    font-weight: bolder;
    color: ${cores.vermelho};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: normal;
    color: ${cores.vermelho};
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Vazio = styled.h3`
  color: ${cores.bege};
  font-size: 24px;
  text-align: center;
`

export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-weight: bold;
  border: none;
  padding: 4px;
  margin-top: 16px;
  width: 100%;
  cursor: pointer;
`
