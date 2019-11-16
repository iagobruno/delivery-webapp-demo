import ActionTypes from './actionsTypes'
import { PlateType } from '../data'

export interface State {
}

export interface Action {
  type: keyof typeof ActionTypes,
  payload?: any,
}

export const INITIAL_STATE: State = {
}

export default function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    default: return INITIAL_STATE;
  }
}
