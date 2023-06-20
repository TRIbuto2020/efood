import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  beigeLight: '#FFF8F2',
  cinza: '#333',
  red: '#e66767',
  beige: '#ffebd9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: ${colors.beigeLight};
    color: ${colors.white};
  }

  .container{
    max-width: 1024px;
    width: 90%;
    margin: 0 auto;
  }
`
