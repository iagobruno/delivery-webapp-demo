import { BagItemInterface, OrderInterface } from '../common/types'

export interface State {
  plateModalIsOpen: boolean;
  currentPlateModalInfos?: BagItemInterface;
  /** Índice do item que será alterado quando o modal de edição for fechado. */
  itemIndexToReplace?: number;
  bag: {
    list: Array<BagItemInterface>;
    updatedAt?: Date;
  };
  orders: Array<OrderInterface>;
}

const initialState: State = {
  plateModalIsOpen: false,
  currentPlateModalInfos: undefined,
  bag: {
    list: [],
  },
  orders: [],
}

export default initialState
