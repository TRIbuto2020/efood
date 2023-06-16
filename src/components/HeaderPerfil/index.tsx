import { Header, Retorno } from './styles'
import bg from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <Retorno to="/" className="texto">
          Restaurantes
        </Retorno>
        <img src={logo} alt="Logo" />
        <a onClick={openCart} className="texto">
          {items.length} prato{items.length != 1 && 's'} no carrinho
        </a>
      </div>
    </Header>
  )
}

export default HeaderPerfil
