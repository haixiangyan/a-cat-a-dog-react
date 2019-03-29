import {IImage, IVotesElement} from "../../env"

export interface IImageWithVote extends IImage{
  vote: IVotesElement
}

export interface IVotesProps {
}
export interface IVotesState {
  imagesWithVote: Array<IImageWithVote>
  isOpenDialog: boolean
  deletingVoteId: string
}
