import React, { useReducer, useContext } from 'react'
import reducer, { INITIAL_STATE, State, Action } from './reducer'

interface ContextType extends State {
  dispatch: React.Dispatch<Action>
}
const StoreContext = React.createContext<ContextType>({} as any)

/**
 * Provedor do estado global usando a api de contexto e o hook "useReducer".
 */
const StoreProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const ctx: ContextType = {
    ...state,
    dispatch,
  }

  return (
    <StoreContext.Provider value={ctx}>
      {children}
    </StoreContext.Provider>
  );
}

/**
 * Acessar o estado global do app.
 */
export function useStore() {
  return useContext(StoreContext)
}

export default StoreProvider
