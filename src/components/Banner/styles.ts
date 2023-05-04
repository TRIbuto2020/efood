import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
  font-weight: bold;
  position: relative;

  .filter {
    position: absolute;
    backdrop-filter: brightness(60%);
    height: 100%;
    width: 100%;
  }

  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  max-width: 450px;
`

export const Categoria = styled.h3`
  font-size: 32px;
  font-weight: 100;
`
