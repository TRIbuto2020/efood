import { HeaderDiv } from './styles'
import bg from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import cart from '../../assets/images/cart.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderDiv style={{ backgroundImage: `url(${bg})` }}>
      <img src={logo} alt="" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
      {items.length !== 0 && (
        <a onClick={openCart} className="texto">
          <img src={cart} alt="" />
          {items.length}
        </a>
      )}
    </HeaderDiv>
  )
}

export default Header
