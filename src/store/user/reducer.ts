import {UPDATE_USER} from "../actionTypes";
import {IUpdateUserAction, IUserStore, UserAction} from "./index"

let initState: IUserStore = {
  subId: '',
  type: 'CAT'
}

const reducer = (state = initState, action: UserAction) => {
  switch (action.type) {
    case UPDATE_USER:
      return (<IUpdateUserAction>action).payload
    default:
      return state
  }
}

export default reducer
