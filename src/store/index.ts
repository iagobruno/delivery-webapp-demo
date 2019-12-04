import { createOvermind, IConfig } from 'overmind'
import { createHook } from 'overmind-react'
import state from './state'
import * as actions from './actions'
import { menu } from '../data'

const config = {
  state,
  actions,
  onInitialize({ actions }) {},
  devtools: false,
}

const store = createOvermind(config)

export default store

export const useStore = createHook<typeof config>()

export { State } from './state'

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}