import {updateUser} from "../store/user/actions"
import {updateAxios} from "../store/axios/actions"
import store from '../store/store'

export const initType = () => {
  const userStr = localStorage.getItem('user')
  if (!userStr) {
    return
  }
  const user = JSON.parse(userStr)
  if (!user.subId || !user.type) {
    return
  }
  store.dispatch(updateUser(user))
  store.dispatch(updateAxios(user.type))
}
