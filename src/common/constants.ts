export const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

// @ts-ignore
export const relativeTime = new Intl.RelativeTimeFormat('pt-BR', { style: 'short', numeric: 'always' })

import { OrderStatus } from './types'

export const orderStatus: OrderStatus[] = [
  'awaiting_payment',
  'pending',
  'in_preparation',
  'ready_for_delivery',
  'on_the_way',
  'delivered'
]