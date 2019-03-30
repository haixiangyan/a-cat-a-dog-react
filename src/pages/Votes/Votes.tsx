import * as React from 'react'
// Redux
import {connect} from "react-redux"
// Types
import {IVotesProps, IVotesState} from "./index"
import {IVotesElement} from "../../env"
// Material UI
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
// Services
import votesService from '../../services/votes'
import imagesService from '../../services/images'
// Custom components
import Header from '../../components/Header/Header'
import {IStore} from "../../store"

class Votes extends React.Component<IVotesProps, IVotesState> {
  constructor(props: IVotesProps) {
    super(props)
    this.state = {
      imagesWithVote: [],
      isOpenDialog: false,
      deletingVoteId: ''
    }
  }

  public async componentDidMount() {
    const votes: Array<IVotesElement> = await votesService.getVotes({sub_id: this.props.user.subId})
    let imagesWithVote = []

    for (let i = 0; i < votes.length; i++) {
      const image = await imagesService.getImageById(votes[i].image_id)
      const imageWithVote = {...image, vote: votes[i]}
      imagesWithVote.push(imageWithVote)
    }
    this.setState({imagesWithVote})
  }

  private formatDate = (dateStr: string): string => {
    const date = new Date(dateStr)
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()-2000}`
  }

  private deleteVote = async () => {
    const {deletingVoteId} = this.state
    // Remove locally
    const newImagesWithVote = this.state.imagesWithVote.filter(image => image.vote.id !== deletingVoteId)
    this.setState({imagesWithVote: newImagesWithVote})
    this.closeDialog()
    // Send request to remove
    await votesService.deleteVote(deletingVoteId)
  }

  private closeDialog = () => {
    this.setState({isOpenDialog: false})
  }
  private openDialog = () => {
    this.setState({isOpenDialog: true})
  }
  private deletingVote = (voteId: string) => {
    this.openDialog()
    this.setState({deletingVoteId: voteId})
  }

  public render() {
    const {imagesWithVote, isOpenDialog} = this.state
    return (
      <div>
        <Header/>

        <h3 style={{textAlign: 'center', marginBottom: 12}}>Voted Images</h3>
        <GridList cellHeight={180}>
          {
            imagesWithVote.map(image => (
              <GridListTile key={image.id}>
                <img src={image.url} alt={image.id}/>
                <GridListTileBar title="" subtitle={this.formatDate(image.vote.created_at)}
                  actionIcon={
                    <IconButton onClick={() => this.deletingVote(image.vote.id)}>
                      <Icon color="secondary">close</Icon>
                    </IconButton>
                  }/>
              </GridListTile>
            ))
          }
        </GridList>

        <Dialog open={isOpenDialog} onClose={this.closeDialog}>
          <DialogTitle>Sure to delete it?</DialogTitle>
          <DialogActions>
            <Button onClick={this.deleteVote} color="primary">
              Delete
            </Button>
            <Button onClick={this.closeDialog} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  user: state.user
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Votes)
