import { useDispatch, useSelector } from 'react-redux'

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar,
  Button,
  Vazio
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Prato'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 && (
          <div>
            <Vazio>Seu carrinho está vazio...</Vazio>
          </div>
        )}
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        {items.length > 0 && (
          <>
            <Prices>
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice())} </p>
            </Prices>
            <Button>Continuar com a entrega</Button>
          </>
        )}
        <Button onClick={closeCart}>Voltar às compras!</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
