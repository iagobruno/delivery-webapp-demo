import { PlateType } from '../data'

interface State {
  plateModalIsOpen: boolean;
  currentPlateModalInfos?: PlateType;
}

const initialState: State = {
  plateModalIsOpen: false,
  plateModalInfos: undefined,
}

export default initialState