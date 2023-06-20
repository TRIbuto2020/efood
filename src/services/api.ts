import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Product = {
  id: number
  price: number
}

export type DeliveryDetails = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

export type PaymentDetails = {
  card: {
    name: string
    number: number
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

export type PurchasePayload = {
  products: Product[]
  delivery: DeliveryDetails
  payment: PaymentDetails
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getPratos: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetPratosQuery,
  usePurchaseMutation
} = api

export default api
