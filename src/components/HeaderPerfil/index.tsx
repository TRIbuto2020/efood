import { Header, Retorno } from './styles'
import bg from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.svg'

const HeaderPerfil = () => {
  return (
    <Header style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <Retorno to="/" className="texto">
          Restaurantes
        </Retorno>
        <img src={logo} alt="Logo" />
        <p className="texto">0 produto(s) no carrinho</p>
      </div>
    </Header>
  )
}

export default HeaderPerfil
