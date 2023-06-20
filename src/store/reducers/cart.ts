import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../pages/Home'
import {
  PurchasePayload,
  Product,
  DeliveryDetails,
  PaymentDetails
} from '../../services/api'

type CartState = {
  items: Prato[]
  isOpen: boolean
  order: PurchasePayload
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  order: {
    products: [],
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 12,
        complement: ''
      }
    },
    payment: {
      card: {
        name: '',
        number: 0,
        code: 432,
        expires: {
          month: 12,
          year: 2030
        }
      }
    }
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.items.push({
          id: action.payload.id,
          nome: action.payload.nome,
          preco: action.payload.preco,
          descricao: action.payload.descricao,
          porcao: action.payload.porcao,
          foto: action.payload.foto,
          orderId: action.payload.id
        })
      } else {
        const plus = Math.floor(Math.random() * 10000)
        state.items.push({
          id: action.payload.id,
          nome: action.payload.nome,
          preco: action.payload.preco,
          descricao: action.payload.descricao,
          porcao: action.payload.porcao,
          foto: action.payload.foto,
          orderId: action.payload.id + plus + 100
        })
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.orderId !== action.payload
      )
    },
    reset: (state) => {
      state.items = []
    },
    getPratos: (state, action: PayloadAction<Product[]>) => {
      state.order.products = action.payload
    },
    delivery: (state, action: PayloadAction<DeliveryDetails>) => {
      state.order.delivery = action.payload
    },
    payment: (state, action: PayloadAction<PaymentDetails>) => {
      state.order.payment = action.payload
    }
  }
})

export const { add, open, close, remove, reset, getPratos, delivery, payment } =
  cartSlice.actions
export default cartSlice.reducer
