import store from "../store/store"
import {
  IAddVoteData,
  IGetVotesParams,
} from "./index"
import {AxiosResponse} from "axios"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getVotes: (params: IGetVotesParams) => {
    return axios
      .get(`/votes`, {params})
      .then((response: AxiosResponse) => response.data)
  },
  getVoteById: (voteId: string) => {
    return axios
      .get(`/votes/${voteId}`)
      .then((response: AxiosResponse) => response.data)
  },
  addVote: (data: IAddVoteData) => {
    return axios
      .post(`/votes`, data)
      .then((response: AxiosResponse) => response.data)
  },
  deleteVote: (voteId: string) => {
    return axios
      .delete(`/votes/${voteId}`)
      .then((response: AxiosResponse) => response.data)
  }
}
