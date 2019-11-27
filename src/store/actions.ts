import { Action } from 'overmind'
import { PlateType } from '../data'

export const openModal: Action<PlateType> = ({ state }, plateInfos) => {
  state.plateModalIsOpen = true
  state.currentPlateModalInfos = plateInfos
}

export const closeModal: Action = ({ state }) => {
  state.plateModalIsOpen = false
  state.currentPlateModalInfos = undefined
}