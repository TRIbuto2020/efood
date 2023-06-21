import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'

import {
  close,
  delivery,
  getPratos,
  payment,
  remove,
  reset
} from '../../store/reducers/cart'

import { parseToBrl } from '../../utils'
import { Product, usePurchaseMutation } from '../../services/api'
import Loader from '../Loader'

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar,
  Button,
  Empty,
  Titulo,
  Info,
  Half,
  Thirds,
  Thanks
} from './styles'

const Cart = () => {
  const { isOpen, items, order } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [cartStage, setCartStage] = useState(0)

  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    setCartStage(0)
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const nextStage = () => {
    setCartStage(cartStage + 1)
  }

  const prevStage = () => {
    setCartStage(cartStage - 1)
  }

  const finish = () => {
    setCartStage(0)
    dispatch(reset())
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const defOrder = () => {
    const pratos: Product[] = []
    items.map((prato) => {
      pratos.push({
        id: prato.id,
        price: prato.preco
      })
    })
    dispatch(getPratos(pratos))
    nextStage()
  }

  const form = useFormik({
    initialValues: {
      receber: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: 0,
      complemento: ''
    },
    validationSchema: Yup.object({
      receber: Yup.string()
        .min(5, 'O nome deve ter ao menos 5 caracters')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(5, 'O endereço deve ter ao menos 5 caracters')
        .required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP deve ter 9 caracters')
        .max(9, 'O CEP deve ter 9 caracters')
        .required('O campo é obrigatório'),
      numero: Yup.number().required('O campo é obrigatório'),
      complemento: Yup.string()
    }),
    onSubmit: (values) => {
      dispatch(
        delivery({
          address: {
            city: values.cidade,
            complement: values.complemento,
            description: values.endereco,
            number: values.numero,
            zipCode: values.cep
          },
          receiver: values.receber
        })
      )
      nextStage()
    }
  })

  const formPag = useFormik({
    initialValues: {
      nome: '',
      numCart: 0,
      cvv: 555,
      mes: 1,
      ano: 2025
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome deve ter ao menos 5 caracters')
        .required('O campo é obrigatório'),
      numCart: Yup.number().required('O campo é obrigatório'),
      cvv: Yup.number()
        .max(999, 'O CEP deve ter 3 caracters')
        .required('O campo é obrigatório'),
      mes: Yup.number()
        .max(12, 'Insira um mês válido')
        .min(1, 'Insira um mês válido')
        .required('O campo é obrigatório'),
      ano: Yup.number()
        .max(2100, 'Insira um ano válido')
        .min(1999, 'Insira um ano válido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        payment({
          card: {
            code: values.cvv,
            name: values.nome,
            number: values.numCart,
            expires: {
              month: values.mes,
              year: values.ano
            }
          }
        })
      )
      purchase(order)
      nextStage()
    }
  })

  const getErrorMessageForm = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const getErrorMessageFormPag = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formPag.touched
    const isInvalid = fieldName in formPag.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={isSuccess ? finish : closeCart} />
      <Sidebar>
        {cartStage === 0 && (
          <>
            {items.length === 0 && (
              <div>
                <Empty>Seu carrinho está vazio...</Empty>
              </div>
            )}
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                  </div>
                  <button
                    type="button"
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onClick={() => removeItem(item.inCartId!)}
                  />
                </CartItem>
              ))}
            </ul>
            {items.length > 0 && (
              <>
                <Prices>
                  <p>Valor total</p>
                  <p>{parseToBrl(getTotalPrice())} </p>
                </Prices>
                <Button onClick={defOrder}>Continuar com a entrega</Button>
              </>
            )}
            <Button onClick={closeCart}>Voltar às compras!</Button>
          </>
        )}
        {cartStage === 1 && (
          <>
            <form onSubmit={form.handleSubmit}>
              <Titulo>Entrega</Titulo>
              <Info>
                <label htmlFor="receber">Quem irá receber</label>
                <input
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.receber}
                  type="text"
                  name="receber"
                  id="receber"
                />
                <small>
                  {getErrorMessageForm('receber', form.errors.receber)}
                </small>
              </Info>
              <Info>
                <label htmlFor="endereco">Endereço</label>
                <input
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.endereco}
                  type="text"
                  name="endereco"
                  id="endereco"
                />
                <small>
                  {getErrorMessageForm('endereco', form.errors.endereco)}
                </small>
              </Info>
              <Info>
                <label htmlFor="cidade">Cidade</label>
                <input
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cidade}
                  type="text"
                  name="cidade"
                  id="cidade"
                />
                <small>
                  {getErrorMessageForm('cidade', form.errors.cidade)}
                </small>
              </Info>
              <Half>
                <Info>
                  <label htmlFor="cep">CEP</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cep}
                    type="text"
                    name="cep"
                    id="cep"
                  />
                  <small>{getErrorMessageForm('cep', form.errors.cep)}</small>
                </Info>
                <Info>
                  <label htmlFor="numero">Número</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.numero}
                    type="number"
                    name="numero"
                    id="numero"
                  />
                  <small>
                    {getErrorMessageForm('numero', form.errors.numero)}
                  </small>
                </Info>
              </Half>
              <Info>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.complemento}
                  type="text"
                  name="complemento"
                  id="complemento"
                />
              </Info>
              <Button type="submit">Continuar com o pagamento</Button>
              <Button onClick={prevStage}>Voltar para o carrinho</Button>
            </form>
          </>
        )}
        {cartStage === 2 && (
          <>
            <form onSubmit={formPag.handleSubmit}>
              <Titulo>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}
              </Titulo>
              <Info>
                <label htmlFor="nome">Nome no cartão</label>
                <input
                  onChange={formPag.handleChange}
                  onBlur={formPag.handleBlur}
                  value={formPag.values.nome}
                  type="text"
                  name="nome"
                  id="nome"
                />
                <small>
                  {getErrorMessageFormPag('nome', formPag.errors.nome)}
                </small>
              </Info>
              <Thirds>
                <Info>
                  <label htmlFor="numCart">Número do cartão</label>
                  <input
                    onChange={formPag.handleChange}
                    onBlur={formPag.handleBlur}
                    value={formPag.values.numCart}
                    type="number"
                    name="numCart"
                    id="numCart"
                  />
                  <small>
                    {getErrorMessageFormPag('numCart', formPag.errors.numCart)}
                  </small>
                </Info>
                <Info>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    onChange={formPag.handleChange}
                    onBlur={formPag.handleBlur}
                    value={formPag.values.cvv}
                    type="number"
                    name="cvv"
                    id="cvv"
                  />
                  <small>
                    {getErrorMessageFormPag('cvv', formPag.errors.cvv)}
                  </small>
                </Info>
              </Thirds>
              <Half>
                <Info>
                  <label htmlFor="mes">Mês de vencimento</label>
                  <input
                    onChange={formPag.handleChange}
                    onBlur={formPag.handleBlur}
                    value={formPag.values.mes}
                    type="number"
                    name="mes"
                    id="mes"
                  />
                  <small>
                    {getErrorMessageFormPag('mes', formPag.errors.mes)}
                  </small>
                </Info>
                <Info>
                  <label htmlFor="ano">Ano de vencimento</label>
                  <input
                    onChange={formPag.handleChange}
                    onBlur={formPag.handleBlur}
                    value={formPag.values.ano}
                    type="number"
                    name="ano"
                    id="ano"
                  />
                  <small>
                    {getErrorMessageFormPag('ano', formPag.errors.ano)}
                  </small>
                </Info>
              </Half>
              <Button type="submit">Finalizar pagamento</Button>
              <Button onClick={prevStage}>
                Voltar para a edição de endereço
              </Button>
            </form>
          </>
        )}

        {cartStage === 3 && (
          <>
            {isSuccess && data && (
              <>
                <Titulo>Pedido realizado - {data.orderId}</Titulo>
                <Thanks>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                  <br />
                  <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                  <br />
                  <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </Thanks>
                <Button onClick={finish}>Concluir</Button>
              </>
            )}
            {isLoading && <Loader />}
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
