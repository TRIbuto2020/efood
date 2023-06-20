import styled from 'styled-components'
import { colors } from '../../styles'
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
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.beige};
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.beige};
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${colors.beige};
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
    color: ${colors.red};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: normal;
    color: ${colors.red};
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

export const Empty = styled.h3`
  color: ${colors.beige};
  font-size: 24px;
  text-align: center;
`

export const Button = styled.button`
  background-color: ${colors.beige};
  color: ${colors.red};
  font-weight: bold;
  border: none;
  padding: 4px;
  margin-top: 16px;
  width: 100%;
  cursor: pointer;
`

export const Titulo = styled.h4`
  color: ${colors.beige};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`

export const Info = styled.div`
  margin: 8px 0;

  label {
    font-size: 14px;
    color: ${colors.beige};
    font-weight: bold;
  }

  input {
    display: block;
    width: 100%;
    margin-top: 8px;
    border: none;
    background-color: ${colors.beige};
    padding: 8px;
  }

  small {
    color: ${colors.beige};
  }
`

export const Half = styled.div`
  display: flex;
  gap: 10%;
`

export const Thirds = styled.div`
  display: grid;
  grid-template-columns: 60% 30%;
  gap: 10%;
`

export const Thanks = styled.p`
  line-height: 22px;
  font-size: 14px;
  color: ${colors.beige};
  margin-bottom: 24px;
`
