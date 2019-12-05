import { Action } from 'overmind'
import { PlateInterface, BagItemInterface, OrderInterface } from '../common/types'
import { json } from 'overmind'

export const openModal: Action<PlateInterface> = ({ state }, plateInfos) => {
  // @ts-ignore
  state.currentPlateModalInfos = plateInfos
  state.plateModalIsOpen = true
}

export const closeModal: Action = ({ state }) => {
  state.plateModalIsOpen = false
  state.currentPlateModalInfos = undefined
  delete state.itemIndexToReplace
}

export const addToBag: Action<BagItemInterface> = ({ state }, plate) => {
  state.bag.list.push(plate)
  state.bag.updatedAt = new Date()
}

export const removeFromBag: Action<number> = ({ state }, index) => {
  state.bag.list.splice(index, 1)
  state.bag.updatedAt = new Date()
}

export const editItemInBag: Action<number> = ({ state, actions }, index) => {
  state.itemIndexToReplace = index
  const item = json(state.bag.list.find((_, i) => i === index))
  actions.openModal(item)
}

type ReplaceItemArg = {
  index: number;
  updatedItem: BagItemInterface;
}

export const replaceItemInBag: Action<ReplaceItemArg> = ({ state }, { index, updatedItem }) => {
  state.bag.list.splice(index, 1, updatedItem)
  state.bag.updatedAt = new Date()
}

export const clearBag: Action = ({ state }) => {
  state.bag = {
    list: [],
    updatedAt: undefined
  }
}

type CreateOrderArg = Pick<OrderInterface, 'price' | 'plates' | 'deliveryType'>

export const createOrder: Action<CreateOrderArg> = ({ state }, order) => {
  state.orders.push({
    ...order,
    paid: true,
    status: 'pending',
    preparationTimeEstimate: 10,
    createdAt: new Date(),
  })
}

type UpdateOrderArg = {
  index: number;
  updatedItem: OrderInterface;
}

export const updateOrder: Action<UpdateOrderArg> = ({ state }, { index, updatedItem }) => {
  state.orders.splice(index, 1, updatedItem)
}
