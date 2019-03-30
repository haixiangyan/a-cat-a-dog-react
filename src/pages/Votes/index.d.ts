import {IImage, IVotesElement} from "../../env"
import {IUserStore} from "../../store/user"

export interface IImageWithVote extends IImage{
  vote: IVotesElement
}

export interface IVotesProps {
  user: IUserStore
}
export interface IVotesState {
  imagesWithVote: Array<IImageWithVote>
  isOpenDialog: boolean
  deletingVoteId: string
}
