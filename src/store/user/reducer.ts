import {INIT_USER} from "../actionTypes";
import {IInitUserAction, IUserStore, UserAction} from "./index"

let initState: IUserStore = {
  subId: ''
}

const reducer = (state = initState, action: UserAction) => {
  switch (action.type) {
    case INIT_USER:
      return {...state, subId: (<IInitUserAction>action).payload.subId}
    default:
      return state
  }
}

export default reducer
