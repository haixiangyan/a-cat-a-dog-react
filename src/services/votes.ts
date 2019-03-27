import store from '../store/store'

const axios = store.getState().axios

export default {
  getVotes: (params: IGetVotesParams) => {
    return axios
      .get(`/votes`, {params})
      .then((response: any) => response.data)
  },
  getVoteById: (voteId: string) => {
    return axios
      .get(`/votes/${voteId}`)
      .then((response: any) => response.data)
  },
  addVote: (data: IAddVoteData) => {
    return axios
      .post(`/votes`, data)
      .then((response: any) => response.data)
  },
  deleteVote: (voteId: string) => {
    return axios
      .delete(`/votes/${voteId}`)
      .then((response: any) => response.data)
  }
}
